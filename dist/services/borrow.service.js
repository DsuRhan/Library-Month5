//src/services/borrow.service.ts
import prisma from '../prisma';
import * as borrowRepo from '../repositories/borrow.repository';
const BORROW_DAYS = 7;
const FINE_PER_DAY = 2000;
/* =========================
   BORROW BOOKS
========================= */
export const borrowBooks = async (memberId, items) => {
    if (!Array.isArray(items) || items.length === 0) {
        throw new Error('Borrow items cannot be empty');
    }
    return prisma.$transaction(async (tx) => {
        for (const item of items) {
            const book = await tx.book.findFirst({
                where: { id: item.bookId, deletedAt: null }
            });
            if (!book)
                throw new Error('Book not found');
            if (book.stok < item.qty) {
                throw new Error(`Stok buku "${book.title}" tidak cukup`);
            }
            await tx.book.update({
                where: { id: item.bookId },
                data: { stok: { decrement: item.qty } }
            });
        }
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + BORROW_DAYS);
        return borrowRepo.createBorrow({
            member: { connect: { id: memberId } },
            dueDate,
            status: 'BORROWED',
            items: {
                create: items.map((i) => ({
                    book: { connect: { id: i.bookId } },
                    qty: i.qty
                }))
            }
        }, tx);
    });
};
/* =========================
   RETURN BOOKS
========================= */
export const returnBorrow = async (borrowId) => {
    return prisma.$transaction(async (tx) => {
        const borrow = await borrowRepo.findByIdTx(borrowId, tx);
        if (!borrow)
            throw new Error('Borrow record not found');
        if (borrow.status === 'RETURNED') {
            throw new Error('Borrow already returned');
        }
        for (const item of borrow.items) {
            await tx.book.update({
                where: { id: item.bookId },
                data: { stok: { increment: item.qty } }
            });
        }
        const now = new Date();
        let fine = 0;
        if (now > borrow.dueDate) {
            const diffDays = Math.ceil((now.getTime() - borrow.dueDate.getTime()) / (1000 * 60 * 60 * 24));
            fine = diffDays * FINE_PER_DAY;
        }
        return borrowRepo.updateReturn(borrowId, {
            status: 'RETURNED',
            returnedAt: now,
            fine
        }, tx);
    });
};
/* =========================
   MEMBER HISTORY
========================= */
export const getMyBorrowings = async (memberId) => {
    return borrowRepo.findByMemberId(memberId);
};
/* =========================
   ADMIN: ALL BORROW
========================= */
export const getAllBorrowings = async (filter) => {
    const where = {};
    if (filter.status) {
        where.status = filter.status;
    }
    if (filter.startDate || filter.endDate) {
        where.borrowedAt = {};
        if (filter.startDate)
            where.borrowedAt.gte = filter.startDate;
        if (filter.endDate)
            where.borrowedAt.lte = filter.endDate;
    }
    if (filter.memberName) {
        where.member = {
            name: {
                contains: filter.memberName,
                mode: 'insensitive'
            }
        };
    }
    return borrowRepo.findAllWithFilter(where);
};
//# sourceMappingURL=borrow.service.js.map
//src/repositories/borrow.repository.ts
import prisma from '../prisma.js';
export const createBorrow = async (data, tx) => {
    return tx.borrow.create({
        data,
        include: {
            items: { include: { book: true } },
            member: true
        }
    });
};
export const findByIdTx = async (id, tx) => {
    return tx.borrow.findUnique({
        where: { id },
        include: {
            items: { include: { book: true } },
            member: true
        }
    });
};
export const findByMemberId = async (memberId) => {
    return prisma.borrow.findMany({
        where: { memberId },
        include: {
            items: { include: { book: true } }
        },
        orderBy: { createdAt: 'desc' }
    });
};
export const findAll = async () => {
    return prisma.borrow.findMany({
        include: {
            items: { include: { book: true } },
            member: true
        },
        orderBy: { createdAt: 'desc' }
    });
};
export const updateReturn = async (id, data, tx) => {
    return tx.borrow.update({
        where: { id },
        data
    });
};
export const findAllWithFilter = async (where) => {
    return prisma.borrow.findMany({
        where,
        include: {
            items: { include: { book: true } },
            member: true
        },
        orderBy: { createdAt: 'desc' }
    });
};
//# sourceMappingURL=borrow.repository.js.map
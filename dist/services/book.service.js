//src/services/book.service.ts
import * as bookRepo from '../repositories/book.repository';
export const getAllBooks = async (params) => {
    const { page, limit, search, sortBy, sortOrder, available, yearFrom, yearTo } = params;
    const skip = (page - 1) * limit;
    const where = { deletedAt: null };
    if (search) {
        where.OR = [
            { title: { contains: search, mode: 'insensitive' } },
            { author: { contains: search, mode: 'insensitive' } }
        ];
    }
    if (typeof available === 'boolean') {
        where.stok = available ? { gt: 0 } : { equals: 0 };
    }
    if (yearFrom || yearTo) {
        where.tahun = {};
        if (yearFrom)
            where.tahun.gte = yearFrom;
        if (yearTo)
            where.tahun.lte = yearTo;
    }
    const orderBy = sortBy ? { [sortBy]: sortOrder ?? 'desc' } : { createdAt: 'desc' };
    const books = await bookRepo.findAll(skip, limit, where, orderBy);
    const totalItems = await bookRepo.countAll(where);
    return {
        books,
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
        currentPage: page
    };
};
export const getBookById = async (id) => {
    const book = await bookRepo.findById(id);
    if (!book)
        throw new Error('Book not found');
    return book;
};
export const createBook = async (data) => {
    return bookRepo.create(data);
};
export const updateBook = async (id, data) => {
    await getBookById(id);
    return bookRepo.update(id, data);
};
export const deleteBook = async (id) => {
    await getBookById(id);
    return bookRepo.softDelete(id);
};
//# sourceMappingURL=book.service.js.map
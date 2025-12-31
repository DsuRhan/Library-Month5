//src/repositories/book.repository.ts
import prisma from '../prisma';
export const findAll = async (skip, take, where, orderBy) => {
    return prisma.book.findMany({
        skip,
        take,
        where,
        orderBy
    });
};
export const countAll = async (where) => {
    return prisma.book.count({ where });
};
export const findById = async (id) => {
    return prisma.book.findFirst({
        where: {
            id,
            deletedAt: null
        }
    });
};
export const create = async (data) => {
    return prisma.book.create({ data });
};
export const update = async (id, data) => {
    return prisma.book.update({
        where: { id },
        data
    });
};
export const softDelete = async (id) => {
    return prisma.book.update({
        where: { id },
        data: { deletedAt: new Date() }
    });
};
//# sourceMappingURL=book.repository.js.map
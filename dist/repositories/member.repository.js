import prisma from "../prisma";
/* =========================
   FIND ALL (PAGINATION)
========================= */
export const findAll = async (skip, take, where) => {
    return prisma.member.findMany({
        skip,
        take,
        where,
        orderBy: {
            createdAt: "desc"
        }
    });
};
/* =========================
   COUNT
========================= */
export const countAll = async (where) => {
    return prisma.member.count({ where });
};
/* =========================
   FIND BY ID
========================= */
export const findById = async (id) => {
    return prisma.member.findFirst({
        where: {
            id,
            deletedAt: null
        }
    });
};
/* =========================
   CREATE
========================= */
export const create = async (data) => {
    return prisma.member.create({ data });
};
/* =========================
   UPDATE
========================= */
export const update = async (id, data) => {
    return prisma.member.update({
        where: { id },
        data
    });
};
/* =========================
   SOFT DELETE
========================= */
export const softDelete = async (id) => {
    return prisma.member.update({
        where: { id },
        data: {
            deletedAt: new Date()
        }
    });
};
//# sourceMappingURL=member.repository.js.map
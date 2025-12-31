// services/user.service.ts
import prisma from '../prisma.js';
export const findByEmail = async (email) => {
    return prisma.user.findUnique({
        where: { email }
    });
};
export const findById = async (id) => {
    return prisma.user.findUnique({
        where: { id }
    });
};
export const create = async (data) => {
    return prisma.user.create({
        data
    });
};
//# sourceMappingURL=user.service.js.map
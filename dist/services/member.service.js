//src/services/member.service.ts
import * as memberRepo from '../repositories/member.repository';
export const getAllMembers = async (page, limit, search) => {
    const skip = (page - 1) * limit;
    const where = {
        deletedAt: null,
        ...(search && {
            OR: [
                { name: { contains: search, mode: 'insensitive' } },
                { email: { contains: search, mode: 'insensitive' } }
            ]
        })
    };
    const members = await memberRepo.findAll(skip, limit, where);
    const totalItems = await memberRepo.countAll(where);
    return {
        members,
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
        currentPage: page
    };
};
export const getMemberById = async (id) => {
    const member = await memberRepo.findById(id);
    if (!member)
        throw new Error('Member not found');
    return member;
};
export const createMember = async (data) => {
    return memberRepo.create(data);
};
export const updateMember = async (id, data) => {
    await getMemberById(id);
    return memberRepo.update(id, data);
};
export const deleteMember = async (id) => {
    await getMemberById(id);
    return memberRepo.softDelete(id);
};
//# sourceMappingURL=member.service.js.map
//src/services/member.service.ts
import * as memberRepo from '../repositories/member.repository';
import type { Member, Prisma } from '../generated/client';

export const getAllMembers = async (
  page: number,
  limit: number,
  search?: string
) => {
  const skip = (page - 1) * limit;

  const where: Prisma.MemberWhereInput = {
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

export const getMemberById = async (id: string): Promise<Member> => {
  const member = await memberRepo.findById(id);
  if (!member) throw new Error('Member not found');
  return member;
};

export const createMember = async (data: Prisma.MemberCreateInput) => {
  return memberRepo.create(data);
};

export const updateMember = async (
  id: string,
  data: Prisma.MemberUpdateInput
) => {
  await getMemberById(id);
  return memberRepo.update(id, data);
};

export const deleteMember = async (id: string) => {
  await getMemberById(id);
  return memberRepo.softDelete(id);
};

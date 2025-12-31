//src/repositories/user.repository.ts
import prisma from '../database';

export const findByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: { email }
  });
};

export const findById = async (id: string) => {
  return prisma.user.findUnique({
    where: { id }
  });
};

export const create = async (data: {
  email: string;
  password: string;
  role: 'ADMIN' | 'MEMBER';
}) => {
  return prisma.user.create({
    data
  });
};

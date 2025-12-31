//src/repositories/borrow.repository.ts
import prisma from '../database';
import type { Prisma } from '../generated/client';

export const createBorrow = async (
  data: Prisma.BorrowCreateInput,
  tx: Prisma.TransactionClient
) => {
  return tx.borrow.create({
    data,
    include: {
      items: { include: { book: true } },
      member: true
    }
  });
};

export const findByIdTx = async (
  id: string,
  tx: Prisma.TransactionClient
) => {
  return tx.borrow.findUnique({
    where: { id },
    include: {
      items: { include: { book: true } },
      member: true
    }
  });
};


export const findByMemberId = async (memberId: string) => {
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

export const updateReturn = async (
  id: string,
  data: Prisma.BorrowUpdateInput,
  tx: Prisma.TransactionClient
) => {
  return tx.borrow.update({
    where: { id },
    data
  });
};

export const findAllWithFilter = async (
  where: Prisma.BorrowWhereInput
) => {
  return prisma.borrow.findMany({
    where,
    include: {
      items: { include: { book: true } },
      member: true
    },
    orderBy: { createdAt: 'desc' }
  });
};

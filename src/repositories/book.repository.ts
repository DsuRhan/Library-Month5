//src/repositories/book.repository.ts
import prisma from '../database';
import type { Prisma } from '../generated/client';

export const findAll = async (
  skip: number,
  take: number,
  where: Prisma.BookWhereInput,
  orderBy: Prisma.BookOrderByWithRelationInput
) => {
  return prisma.book.findMany({
    skip,
    take,
    where,
    orderBy
  });
};

export const countAll = async (where: Prisma.BookWhereInput) => {
  return prisma.book.count({ where });
};

export const findById = async (id: string) => {
  return prisma.book.findFirst({
    where: {
      id,
      deletedAt: null
    }
  });
};

export const create = async (data: Prisma.BookCreateInput) => {
  return prisma.book.create({ data });
};

export const update = async (
  id: string,
  data: Prisma.BookUpdateInput
) => {
  return prisma.book.update({
    where: { id },
    data
  });
};

export const softDelete = async (id: string) => {
  return prisma.book.update({
    where: { id },
    data: { deletedAt: new Date() }
  });
};

//src/services/book.service.ts
// src/services/book.service.ts
import * as bookRepo from '../repositories/book.repository';
import type { Book, Prisma } from '../generated/client';

interface FindAllParams {
  page: number;
  limit: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  available?: boolean;
  yearFrom?: number;
  yearTo?: number;
}

export const getAllBooks = async (params: FindAllParams) => {
  const { page, limit, search, sortBy, sortOrder, available, yearFrom, yearTo } =
    params;

  const skip = (page - 1) * limit;

  const where: Prisma.BookWhereInput = { deletedAt: null };

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
    if (yearFrom) where.tahun.gte = yearFrom;
    if (yearTo) where.tahun.lte = yearTo;
  }

  const orderBy: Prisma.BookOrderByWithRelationInput =
    sortBy ? { [sortBy]: sortOrder ?? 'desc' } : { createdAt: 'desc' };

  const books = await bookRepo.findAll(skip, limit, where, orderBy);
  const totalItems = await bookRepo.countAll(where);

  return {
    books,
    totalItems,
    totalPages: Math.ceil(totalItems / limit),
    currentPage: page
  };
};

export const getBookById = async (id: string): Promise<Book> => {
  const book = await bookRepo.findById(id);
  if (!book) throw new Error('Book not found');
  return book;
};

export const createBook = async (data: Prisma.BookCreateInput) => {
  return bookRepo.create(data);
};

export const updateBook = async (id: string, data: Prisma.BookUpdateInput) => {
  await getBookById(id);
  return bookRepo.update(id, data);
};

export const deleteBook = async (id: string) => {
  await getBookById(id);
  return bookRepo.softDelete(id);
};

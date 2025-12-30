//src/controllers/borrow.controller.ts
import type { Request, Response } from 'express';
import * as BorrowService from '../services/borrow.service';
import { asyncHandler } from '../utils/async.handler';
import { successResponse } from '../utils/response';

/* =========================
   MEMBER BORROW
========================= */
export const borrowBooks = asyncHandler(async (req: Request, res: Response) => {
  const items = req.body as { bookId: string; qty: number }[];

  const result = await BorrowService.borrowBooks(
    req.user!.id,
    items
  );

  return successResponse(res, 'Buku berhasil dipinjam', result, null, 201);
});


/* =========================
   RETURN
========================= */
export const returnBooks = asyncHandler(async (req: Request, res: Response) => {
  const result = await BorrowService.returnBorrow(
    String(req.params.id)
  );

  return successResponse(res, 'Pengembalian berhasil', result);
});

/* =========================
   MEMBER HISTORY
========================= */
export const getMyBorrowings = asyncHandler(async (req: Request, res: Response) => {
  const data = await BorrowService.getMyBorrowings(req.user!.id);
  return successResponse(res, 'Riwayat peminjaman', data);
});

/* =========================
   ADMIN: ALL BORROW
========================= */
export const getAllBorrowings = asyncHandler(async (req: Request, res: Response) => {
  const data = await BorrowService.getAllBorrowings({
    status: req.query.status as 'BORROWED' | 'RETURNED',
    memberName: req.query.member as string,
    startDate: req.query.startDate
      ? new Date(req.query.startDate as string)
      : undefined,
    endDate: req.query.endDate
      ? new Date(req.query.endDate as string)
      : undefined
  });

  return successResponse(res, 'Semua data peminjaman', data);
});

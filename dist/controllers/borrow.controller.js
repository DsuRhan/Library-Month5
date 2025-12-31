import * as BorrowService from "../services/borrow.service.js";
import { asyncHandler } from "../utils/async.handler.js";
import { successResponse } from "../utils/response.js";
/* =========================
   MEMBER BORROW
========================= */
export const borrowBooks = asyncHandler(async (req, res) => {
    const items = req.body;
    const result = await BorrowService.borrowBooks(req.user.id, items);
    return successResponse(res, "Buku berhasil dipinjam", result, null, 201);
});
/* =========================
   RETURN
========================= */
export const returnBooks = asyncHandler(async (req, res) => {
    const result = await BorrowService.returnBorrow(String(req.params.id));
    return successResponse(res, "Pengembalian berhasil", result);
});
/* =========================
   MEMBER HISTORY
========================= */
export const getMyBorrowings = asyncHandler(async (req, res) => {
    const data = await BorrowService.getMyBorrowings(req.user.id);
    return successResponse(res, "Riwayat peminjaman", data);
});
/* =========================
   ADMIN: ALL BORROW
========================= */
export const getAllBorrowings = asyncHandler(async (req, res) => {
    const data = await BorrowService.getAllBorrowings({
        status: req.query.status,
        memberName: req.query.member,
        startDate: req.query.startDate
            ? new Date(req.query.startDate)
            : undefined,
        endDate: req.query.endDate
            ? new Date(req.query.endDate)
            : undefined
    });
    return successResponse(res, "Semua data peminjaman", data);
});
//# sourceMappingURL=borrow.controller.js.map

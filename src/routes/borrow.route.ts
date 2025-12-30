import { Router } from "express";
import {
  borrowBooks,
  returnBooks,
  getMyBorrowings,
  getAllBorrowings
} from "../controllers/borrow.controller";
import { verifyToken, adminOnly } from "../middlewares/verifyToken";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Borrow
 *   description: Manajemen peminjaman buku
 */

/**
 * @swagger
 * /borrow:
 *   post:
 *     summary: Pinjam buku (Member)
 *     tags: [Borrow]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               required:
 *                 - bookId
 *                 - qty
 *               properties:
 *                 bookId:
 *                   type: string
 *                   example: 8c1a2b3c-xxxx
 *                 qty:
 *                   type: integer
 *                   example: 1
 *     responses:
 *       201:
 *         description: Buku berhasil dipinjam
 *       400:
 *         description: Stok tidak cukup / data tidak valid
 *       401:
 *         description: Unauthorized
 */
router.post("/borrow", verifyToken, borrowBooks);

/**
 * @swagger
 * /return/{id}:
 *   post:
 *     summary: Kembalikan buku
 *     tags: [Borrow]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pengembalian berhasil
 *       400:
 *         description: Borrow sudah dikembalikan
 *       404:
 *         description: Data borrow tidak ditemukan
 */
router.post("/return/:id", verifyToken, returnBooks);

/**
 * @swagger
 * /my-borrowings:
 *   get:
 *     summary: Riwayat peminjaman member
 *     tags: [Borrow]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Riwayat peminjaman
 *       401:
 *         description: Unauthorized
 */
router.get("/my-borrowings", verifyToken, getMyBorrowings);

/**
 * @swagger
 * /borrowings:
 *   get:
 *     summary: Semua data peminjaman (Admin)
 *     tags: [Borrow]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [BORROWED, RETURNED]
 *       - in: query
 *         name: member
 *         schema:
 *           type: string
 *           example: budi
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *           example: 2024-01-01
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *           example: 2024-12-31
 *     responses:
 *       200:
 *         description: Semua data peminjaman
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden (Admin only)
 */
router.get("/borrowings", verifyToken, adminOnly, getAllBorrowings);

export default router;

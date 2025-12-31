//src/routes/book.route.ts
import { Router } from "express";
import { getAllBooks, getBookById, createBook, updateBook, deleteBook } from "../controllers/book.controller.js";
import { createBookValidation, updateBookValidation, bookIdValidation, } from "../validations/book.validation.js";
import { validate, paginationValidation } from "../middlewares/validate.js";
import { verifyToken, adminOnly } from "../middlewares/verifyToken.js";
import { upload } from "../middlewares/upload.middleware.js";
const router = Router();
/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Manajemen data buku
 */
/**
 * @swagger
 * /books:
 *   get:
 *     summary: Ambil daftar buku
 *     tags: [Books]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *           example: harry
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           example: createdAt
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           example: desc
 *       - in: query
 *         name: available
 *         schema:
 *           type: boolean
 *           example: true
 *       - in: query
 *         name: yearFrom
 *         schema:
 *           type: integer
 *           example: 2020
 *       - in: query
 *         name: yearTo
 *         schema:
 *           type: integer
 *           example: 2024
 *     responses:
 *       200:
 *         description: Daftar buku berhasil diambil
 */
router.get("/", paginationValidation, getAllBooks);
/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Ambil detail buku
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Buku ditemukan
 *       404:
 *         description: Buku tidak ditemukan
 */
router.get("/:id", bookIdValidation, validate, getBookById);
/**
 * @swagger
 * /books:
 *   post:
 *     summary: Tambah buku baru
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - author
 *               - tahun
 *               - stok
 *               - cover
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               tahun:
 *                 type: integer
 *               stok:
 *                 type: integer
 *               description:
 *                 type: string
 *               cover:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Buku berhasil ditambahkan
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden (Admin only)
 */
router.post("/", verifyToken, adminOnly, upload.single("cover"), createBookValidation, validate, createBook);
/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Update buku
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               tahun:
 *                 type: integer
 *               stok:
 *                 type: integer
 *               description:
 *                 type: string
 *               cover:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Buku berhasil diupdate
 *       404:
 *         description: Buku tidak ditemukan
 */
router.put("/:id", verifyToken, adminOnly, upload.single("cover"), updateBookValidation, validate, updateBook);
/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Hapus buku
 *     tags: [Books]
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
 *         description: Buku berhasil dihapus
 *       404:
 *         description: Buku tidak ditemukan
 */
router.delete("/:id", verifyToken, adminOnly, bookIdValidation, validate, deleteBook);
export default router;
//# sourceMappingURL=book.route.js.map

//src/repositories/member.repository.ts
import { Router } from "express";
import {
  getAllMembers,
  getMemberById,
  updateMember,
  deleteMember
} from "../controllers/member.controller";
import {
  updateMemberValidation,
  memberIdValidation,
} from "../validations/member.validation";
import { validate, paginationValidation } from "../middlewares/validate";
import { verifyToken, adminOnly } from "../middlewares/verifyToken";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Member
 *   description: Manajemen data member (Admin only)
 */

/**
 * @swagger
 * /members:
 *   get:
 *     summary: Ambil semua member (Admin)
 *     tags: [Member]
 *     security:
 *       - bearerAuth: []
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
 *           example: budi
 *     responses:
 *       200:
 *         description: Daftar member
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden (Admin only)
 */
router.get(
  "/",
  paginationValidation,
  verifyToken,
  adminOnly,
  getAllMembers
);

/**
 * @swagger
 * /members/{id}:
 *   get:
 *     summary: Ambil detail member berdasarkan ID (Admin)
 *     tags: [Member]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: 9a8b7c6d-xxxx
 *     responses:
 *       200:
 *         description: Member ditemukan
 *       404:
 *         description: Member tidak ditemukan
 *       403:
 *         description: Forbidden
 */
router.get(
  "/:id",
  verifyToken,
  adminOnly,
  memberIdValidation,
  validate,
  getMemberById
);

/**
 * @swagger
 * /members/{id}:
 *   put:
 *     summary: Update data member (Admin)
 *     tags: [Member]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Budi Santoso
 *               email:
 *                 type: string
 *                 format: email
 *                 example: budi@mail.com
 *     responses:
 *       200:
 *         description: Member berhasil diupdate
 *       404:
 *         description: Member tidak ditemukan
 */
router.put(
  "/:id",
  verifyToken,
  adminOnly,
  updateMemberValidation,
  validate,
  updateMember
);

/**
 * @swagger
 * /members/{id}:
 *   delete:
 *     summary: Hapus member (Soft delete)
 *     tags: [Member]
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
 *         description: Member berhasil dihapus
 *       404:
 *         description: Member tidak ditemukan
 */
router.delete(
  "/:id",
  verifyToken,
  adminOnly,
  memberIdValidation,
  validate,
  deleteMember
);

export default router;

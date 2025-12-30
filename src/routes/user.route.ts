//src/routes/user.route.ts
import { Router } from "express";
import { verifyToken, adminOnly } from "../middlewares/verifyToken";
import { validate } from "../middlewares/validate";
import { param } from "express-validator";
import prisma from "../prisma";
import type { Request, Response } from "express";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Manajemen user (Admin only)
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Ambil semua user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Daftar user
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden (Admin only)
 */
router.get(
  "/",
  verifyToken,
  adminOnly,
  async (_req: Request, res: Response) => {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true
      }
    });
    res.json(users);
  }
);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Ambil detail user
 *     tags: [Users]
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
 *         description: User ditemukan
 *       404:
 *         description: User tidak ditemukan
 */
router.get(
  "/:id",
  verifyToken,
  adminOnly,
  [param("id").isString()],
  validate,
  async (req: Request, res: Response) => {
    if (!req.params.id) {
      return res.status(400).json({ message: "User ID is required" });
    }
    const user = await prisma.user.findUnique({
      where: { id: req.params.id },
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true
      }
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  }
);

export default router;

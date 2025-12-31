// services/auth.service.ts
import * as userRepo from "../repositories/user.repository.js";
import prisma from "../prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;
/* =========================
   REGISTER (MEMBER)
========================= */
export const register = async (data) => {
    const existingUser = await userRepo.findByEmail(data.email);
    if (existingUser) {
        throw new Error("Email already registered");
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return prisma.$transaction(async (tx) => {
        const user = await tx.user.create({
            data: {
                email: data.email,
                password: hashedPassword,
                role: "MEMBER"
            }
        });
        await tx.member.create({
            data: {
                name: data.name,
                email: data.email,
                joinedAt: new Date().toISOString(),
                userId: user.id
            }
        });
        return user;
    });
};
/* =========================
   LOGIN
========================= */
export const login = async (data) => {
    const user = await userRepo.findByEmail(data.email);
    if (!user)
        throw new Error("Invalid credentials");
    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch)
        throw new Error("Invalid credentials");
    const token = jwt.sign({
        id: user.id,
        role: user.role
    }, JWT_SECRET, { expiresIn: "1d" });
    return {
        token,
        user: {
            id: user.id,
            email: user.email,
            role: user.role
        }
    };
};
//# sourceMappingURL=auth.service.js.map

//src/routes/member.route.ts
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
import { verifyToken } from "../middlewares/verifyToken";
import { adminOnly } from "../middlewares/verifyToken";

const router = Router();

router.get(
  "/",
  paginationValidation,
  verifyToken,
  adminOnly,
  getAllMembers
);

router.get(
  "/:id",
  verifyToken,
  adminOnly,
  memberIdValidation,
  validate,
  getMemberById
);

// ❌ HAPUS INI
// router.post("/", createMember);

router.put(
  "/:id",
  verifyToken,
  adminOnly,
  updateMemberValidation,
  validate,
  updateMember
);

router.delete(
  "/:id",
  verifyToken,
  adminOnly,
  memberIdValidation,
  validate,
  deleteMember
);

export default router;
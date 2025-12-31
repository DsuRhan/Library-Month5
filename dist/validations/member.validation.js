//src/validations/member.validation.ts
import { body, param } from "express-validator";
export const createMemberValidation = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email")
        .isEmail()
        .withMessage("Valid email is required"),
];
export const updateMemberValidation = [
    param("id").isString().withMessage("Invalid member ID"),
    body("name").optional().notEmpty().withMessage("Name cannot be empty"),
    body("email")
        .optional()
        .isEmail()
        .withMessage("Valid email is required"),
];
export const memberIdValidation = [
    param("id").isString().withMessage("Invalid member ID"),
];
//# sourceMappingURL=member.validation.js.map
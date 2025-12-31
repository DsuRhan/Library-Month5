import { validationResult } from "express-validator";
import { errorResponse } from "../utils/responses.js";
import { query } from "express-validator";
export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json(errorResponse("Validation error", {
            errors: errors.array(),
        }));
    }
    next();
};
export const paginationValidation = [
    query("page").optional().isInt({ min: 1 }),
    query("limit").optional().isInt({ min: 1 }),
    query("sortOrder").optional().isIn(["asc", "desc"])
];
//# sourceMappingURL=validate.js.map

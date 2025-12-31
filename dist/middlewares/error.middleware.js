import { ApiError } from "../utils/api.error";
export function errorMiddleware(err, req, res, _next) {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
    }
    console.error("Unexpected Error:", err);
    return res.status(500).json({
        success: false,
        message: "Internal server error",
    });
}
//# sourceMappingURL=error.middleware.js.map
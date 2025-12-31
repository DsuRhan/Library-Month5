export function successResponse(message, data = null, meta = {}) {
    return {
        success: true,
        message,
        data,
        ...meta
    };
}
export function errorResponse(message, errors = []) {
    return {
        success: false,
        message,
        errors
    };
}
//# sourceMappingURL=responses.js.map
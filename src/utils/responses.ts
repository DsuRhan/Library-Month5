export function successResponse(message: string, data: any = null, meta: any = {}) {
return {
success: true,
message,
data,
...meta
};
}


export function errorResponse(message: string, errors: any = []) {
return {
success: false,
message,
errors
};
}
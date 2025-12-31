import type { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/api.error";
export declare function errorMiddleware(err: ApiError | Error, req: Request, res: Response, _next: NextFunction): Response<any, Record<string, any>>;
//# sourceMappingURL=error.middleware.d.ts.map
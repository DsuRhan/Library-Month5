import type { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/api.error.js";
export declare function errorMiddleware(err: ApiError | Error, _req: Request, res: Response, _next: NextFunction): Response<any, Record<string, any>>;
//# sourceMappingURL=error.middleware.d.ts.map

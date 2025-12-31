import type { Request, Response, NextFunction } from "express";
export declare const validate: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare const paginationValidation: import("express-validator").ValidationChain[];
//# sourceMappingURL=validate.d.ts.map
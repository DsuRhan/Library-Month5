import type { Request, Response, NextFunction } from 'express';
import { errorResponse } from '../utils/responses';


export default function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
console.error('ERROR', err);
const status = err.status || 500;
const message = err.message || 'Internal Server Error';
const errors = err.errors || [];
res.status(status).json(errorResponse(message, errors));
}
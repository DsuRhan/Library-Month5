import type { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';


export default function requestId(req: Request, res: Response, next: NextFunction) {
const id = req.header('X-Request-ID') || uuidv4();
res.setHeader('X-Request-ID', id);
(req as any).requestId = id;
next();
}
import type { Request, Response, NextFunction } from 'express';


export default function timer(req: Request, res: Response, next: NextFunction) {
(req as any).startTime = Date.now();
res.on('finish', () => {
const duration = Date.now() - ((req as any).startTime || Date.now());
res.setHeader('X-Response-Time', `${duration}ms`);
});
next();
}
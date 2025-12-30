import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
            user?: {
        id: string;
        role: 'ADMIN' | 'MEMBER';
      };
      startTime?: number;
      apiKey?: string;
    }
  }
}
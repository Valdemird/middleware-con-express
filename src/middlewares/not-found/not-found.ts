import { NextFunction, Request, Response } from 'express';

export const notFoundMiddleware = () => (req: Request, res: Response, next: NextFunction): void => {
    res.status(404);
    next(new Error('resource not found'));
};

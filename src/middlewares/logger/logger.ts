import { NextFunction, Request, Response } from 'express';
import { Logger } from '../../utils';

export const LogMiddleware = (logger: Logger) => (req: Request, res: Response, next: NextFunction): void => {
    logger.info(`${req.method} ${req.path}`);
    next();
};

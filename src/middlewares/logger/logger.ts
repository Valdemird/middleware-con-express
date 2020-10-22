import { NextFunction, Request, Response } from 'express';
import Winston from 'winston';

const logger = Winston.createLogger({
    transports: [new Winston.transports.Console()],
});

export const LogMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    logger.info(`${req.method} ${req.path}`);
    next();
};

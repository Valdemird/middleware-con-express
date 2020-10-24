import { NextFunction, Request, Response } from 'express';
import { Logger } from '../../utils';

export const errorHandler = (logger?: Logger) => (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction,
): void => {
    let error: Error = new Error('');
    switch (res.statusCode) {
        case 401:
            error = new Error('unauthorized');
            break;
        case 404:
            error = new Error('resource not found');
            break;
        default:
            res.status(500);
            error = new Error('internal server error');
            break;
    }
    if (logger) {
        logger.error(`${res.statusCode}: ${err}`);
    }
    res.json({
        error: error.message,
    });
};

import { NextFunction, Response } from 'express';
import { AppRequest } from '../../interfaces';
import { validate } from '../../services';

export const authMiddleware = () => async (req: AppRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { authorization } = req.headers;
        const token: string | undefined = authorization?.split(' ').filter((element) => element !== 'Bearer')[0];
        if (token) {
            const payload = await validate(token);
            req.auth = payload;
            next();
        }
    } catch (error) {
        next(error);
    }
};

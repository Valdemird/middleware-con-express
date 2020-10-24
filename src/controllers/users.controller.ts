import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { AppRequest } from '../interfaces';
import { ValidationType, validateMiddleware } from '../middlewares/validator';
import { getUserByEmail, getUserById, User } from '../services/users';

const getUsersSchema = Joi.object({
    id: Joi.string().alphanum().min(1).max(10).required(),
});

interface getUserReq extends Request {
    params: {
        id: string;
    };
}

const getUserController = async (req: AppRequest, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    try {
        if (req.auth?.email) {
            const user: User = await getUserById(id);

            res.json(user);
        } else {
            throw new Error('not user match the current email');
        }
    } catch (error) {
        next(error);
    }
};

const getMyUser = async (req: AppRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
        if (req.auth?.email) {
            const user: User = await getUserByEmail(req.auth.email);

            res.json(user);
        }
    } catch (error) {
        next(error);
    }
};

export const userController = {
    getUser: [validateMiddleware(getUsersSchema, ValidationType.params), getUserController],
    getMyUser: getMyUser,
};

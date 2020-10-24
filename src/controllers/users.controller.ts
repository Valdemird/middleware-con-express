import { Request, Response } from 'express';
import Joi from 'joi';
import { ValidationType, validateMiddleware } from '../middlewares/validator';

const getUsersSchema = Joi.object({
    id: Joi.string().alphanum().min(1).max(10).required(),
});

const getUsersController = (req: Request, res: Response): void => {
    res.json({
        data: '10',
    });
};

export const userController = {
    getUsers: [validateMiddleware(getUsersSchema, ValidationType.params), getUsersController],
};

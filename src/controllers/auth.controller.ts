import { NextFunction, Response } from 'express';
import Joi from 'joi';
import { AppRequest } from '../interfaces/interfaces';
import { ValidationType, validateMiddleware } from '../middlewares/validator';
import { signIn } from '../services';

const authSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})
    .xor('username', 'email')
    .required();

const authenticateController = async (req: AppRequest, res: Response, next: NextFunction): Promise<void> => {
    const { username, email, password } = req.body;
    const user = email ?? username;
    try {
        const token = await signIn(user, password);
        res.json({ token });
    } catch (error) {
        next({ error });
    }
};

export const authController = {
    authenticate: [validateMiddleware(authSchema, ValidationType.body), authenticateController],
};

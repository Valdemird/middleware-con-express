import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

export enum ValidationType {
    params,
    body,
}

const getPropertyToValidate = (req: Request, type: ValidationType) => {
    let result: unknown = {};
    switch (type) {
        case ValidationType.body:
            result = req.body;
            break;
        case ValidationType.params:
            result = req.params;
            break;
        default:
            break;
    }
    return result;
};

export const validateMiddleware = (schema: Joi.Schema, type: ValidationType) => (
    req: Request,
    res: Response,
    next: NextFunction,
): void => {
    const object = getPropertyToValidate(req, type);
    schema
        .validateAsync(object)
        .then(() => next())
        .catch((error) => res.json(error));
};

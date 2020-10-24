import { Request } from 'express';
import { UserPayload } from '../services';

export interface AppRequest extends Request {
    auth?: UserPayload;
}

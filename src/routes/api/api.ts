import { Router } from 'express';
import { userController } from '../../controllers';
export const apiRoute = Router();

apiRoute.get('/users/:id', userController.getUsers);

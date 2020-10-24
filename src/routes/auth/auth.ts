import { Router } from 'express';
import { authController } from '../../controllers';

export const authRoute = Router();

authRoute.get('/', authController.authenticate);

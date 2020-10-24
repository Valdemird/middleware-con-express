import { Router } from 'express';
import { userController } from '../../controllers';
import { authMiddleware } from '../../middlewares/auth';
export const apiRoute = Router();

apiRoute.use(authMiddleware());
apiRoute.get('/users/me', userController.getMyUser);
apiRoute.get('/users/:id', userController.getUser);

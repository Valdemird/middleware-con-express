import { Request, Response, Router } from 'express';

export const authRoute = Router();

authRoute.get('/', (req: Request, res: Response) => {
    res.json({
        data: '10',
    });
});

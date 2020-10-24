import express from 'express';
import { errorHandler, LogMiddleware } from './middlewares';
import { notFoundMiddleware } from './middlewares/not-found';
import { apiRoute, authRoute } from './routes';
import { logger } from './utils';
const app = express();
const port = 3000;

app.use(express.json());
app.use(LogMiddleware(logger));
app.use('/auth', authRoute);
app.use('/api', apiRoute);

app.use('*', notFoundMiddleware());
app.use(errorHandler(logger));
app.listen(port, () => {
    console.log(`Avantica TechDay escuchando en  http://localhost:${port}`);
});

import express from 'express';
import { errorHandler, LogMiddleware } from './middlewares';
import { authRoute } from './routes';
const app = express();
const port = 3000;

app.use(express.json());
app.use(LogMiddleware);
app.use('/auth', authRoute);
//app.use('/api', apiRoute);
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Avantica TechDay escuchando en  http://localhost:${port}`);
});

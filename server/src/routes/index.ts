import { Router } from 'express';
import userRouter from './user.routes';
import pointRouter from './point.router';
const routes = Router();
routes.use('/', userRouter);
routes.use('/dashboard', pointRouter);

export default routes;

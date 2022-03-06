import { Router } from 'express';
const userRouter = Router();
import UserService from '../services/UserService';

const userService = new UserService();
userRouter.get('/', (request, response) => {
  const users = userService.all();
  return response.json(users);
});
userRouter.post('/', (request, response) => {
  const { num_registration, name } = request.body;

  const user = userService.create(num_registration, name);
  return response.json(user);
});
export default userRouter;

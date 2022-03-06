import { Router } from 'express';
const pointRouter = Router();
import PointService from '../services/PointServer';

const pointService = new PointService();
pointRouter.post('/entry', (request, response) => {
  const { hour, minute } = request.body;

  const entry = pointService.createEntry(hour, minute);
  return response.json(entry);
});

pointRouter.post('/exit', (request, response) => {
  const { hour, minute } = request.body;

  const entry = pointService.createExite(hour, minute);
  return response.json(entry);
});

pointRouter.get('/exit', (request, response) => {
  const point = pointService.allEntry();
  return response.json(point);
});

pointRouter.get('/entry', (request, response) => {
  const point = pointService.allExit();
  return response.json(point);
});
pointRouter.get('/total', (request, response) => {
  const point = pointService.HoursTotal();
  return response.json(point);
});

export default pointRouter;

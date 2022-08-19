import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const orderRoutes = Router();

const orderController = new OrderController();

orderRoutes.post('/orders', orderController.post);

orderRoutes.get('/orders', orderController.get);

export default orderRoutes;
import * as express from 'express';

import { OrderController } from '../controllers/order.controller';
import { validateUser } from '../middleware/auth.middleware';

export const orderRoutes = express.Router();

orderRoutes.post('/', validateUser, OrderController.placeOrder);
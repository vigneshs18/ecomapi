import * as express from 'express';

import { CartController } from '../controllers/cart.controller';
import { validateUser } from '../middleware/auth.middleware';

export const cartRoutes = express.Router();

cartRoutes.get('/', validateUser, CartController.getUserCart);
cartRoutes.post('/', validateUser, CartController.saveToCart);
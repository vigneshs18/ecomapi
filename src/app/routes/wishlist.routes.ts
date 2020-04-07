import * as express from 'express';

import { WishListController } from '../controllers/wishlist.controller';
import { validateUser } from '../middleware/auth.middleware';

export const wishListRoutes = express.Router();

wishListRoutes.get('/', validateUser, WishListController.getWishList);
wishListRoutes.post('/', validateUser, WishListController.saveWishList);
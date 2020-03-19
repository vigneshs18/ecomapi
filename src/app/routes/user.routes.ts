import * as express from 'express';

import { UserController } from '../controllers/user.controller';
import { validateUser } from '../middleware/auth.middleware';

export const userRoutes = express.Router();

userRoutes.get('/', validateUser, UserController.getProfile);
userRoutes.post('/login', UserController.login);
userRoutes.post('/registration', UserController.registration);
userRoutes.put('/', validateUser, UserController.updateProfile);
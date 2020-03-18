import { UserController } from '../controllers/user.controller';
import * as express from 'express';

export const userRoutes = express.Router();

userRoutes.get('/', UserController.login);
userRoutes.post('/registration', UserController.registration);
userRoutes.put('/', UserController.updateProfile);
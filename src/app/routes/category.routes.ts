import * as express from 'express';

import { CategoryController } from '../controllers/category.controller';

export const categoryRoutes = express.Router();

categoryRoutes.get('/', CategoryController.getCategories);
categoryRoutes.post('/', CategoryController.saveCategories);
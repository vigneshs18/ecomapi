import * as express from 'express';

import { ProductController } from '../controllers/product.controller';
import { validateUser } from '../middleware/auth.middleware';
import { upload } from '../config/multer';

export const productRoutes = express.Router();

productRoutes.get('/', ProductController.getProducts);
productRoutes.get('/:id', ProductController.getProductById);
productRoutes.post('/', upload.single('file'), ProductController.addProduct);
productRoutes.post('/getProductByCategory', ProductController.getProductByCategory);
productRoutes.post('/searchProduct', ProductController.searchProduct);
productRoutes.put('/', ProductController.updateProduct);
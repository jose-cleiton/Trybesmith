import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productRoutes = Router();

const productController = new ProductController();

productRoutes.post('/products', productController.post);

productRoutes.get('/products', productController.get);

export default productRoutes;
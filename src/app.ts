import 'express-async-errors';
import express from 'express';
import productRoutes from './routes/product.routes';
import errorMiddleware from './middleware/errorMiddleware';
import userRoutes from './routes/user.routes';
import orderRoutes from './routes/order.routes';
import loginRoutes from './routes/login.routes';

const app = express();

app.use(express.json());

app.use(productRoutes);
app.use(userRoutes);
app.use(orderRoutes);
app.use(loginRoutes);

app.use(errorMiddleware);

export default app;

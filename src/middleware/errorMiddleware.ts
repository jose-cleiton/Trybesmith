import { Request, Response, NextFunction } from 'express';
import ErrorCustom from '../error/ErrorCustom';

const errorMiddleware = (error: ErrorCustom, _req: Request, res: Response, _next: NextFunction) => {
  const status = error.status || 500;  
  const message = error.message || 'Something went wrong';
  res.status(status).send({ status, message });
};

export default errorMiddleware;
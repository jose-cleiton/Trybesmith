import { NextFunction, Request, Response } from 'express';
import { IncomingHttpHeaders } from 'http';
import OrderService from '../services/OrderService';

export default class OrderController {
  constructor(private orderService = new OrderService()) { }

  public get = async (req: Request, res: Response) => {
    const results = await this.orderService.get();
    res.status(200).json(results);
  };
   
  public post = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization }: IncomingHttpHeaders = req.headers;
    if (!authorization) {
      return next({ status: 401, message: 'Token not found' });
    }
    const { body } = req;
    const results = await this.orderService.post(authorization, body);
    res.status(201).json({ userId: results, ...body });
  };
}

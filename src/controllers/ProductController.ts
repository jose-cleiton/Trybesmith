import { Request, Response } from 'express';
import { Product } from '../interfaces/ProductInfo';
import ProductService from '../services/ProductService';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public get = async (req: Request, res: Response) => {
    const results = await this.productService.get() as Product[];
    res.status(200).json(results);
  };

  public post = async (req: Request, res: Response) => {
    const { body } = req;
    const results = await this.productService.post(body);
    res.status(201).json({ id: results, ...body } as Product);
  };
}

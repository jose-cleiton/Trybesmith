import { Product } from '../interfaces/ProductInfo';
import productValidator from './validations/product.validator';
import ProductModel from '../models/ProductModel';
import connection from '../models/connection';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public get = async (): Promise<Product[]> => {
    const results = await this.model.get();
    return results;
  };

  public post = async (productInfo: Product) => {
    productValidator.productQueryValidator(productInfo);
    const results = await this.model.post(productInfo);
    return results as unknown as Product[];
  };
}

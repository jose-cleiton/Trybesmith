import { Pool } from 'mysql2/promise';
import { Product } from '../interfaces/ProductInfo';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public get = async (): Promise<Product[]> => {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [results] = await this.connection.execute(query);
    return results as Product[];
  };

  public update = async (orderId: number, productId: number) => {
    const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
    const data = await this.connection.execute(query, [orderId, productId]);

    return data;
  };

  public post = async ({ name, amount }: Product) => {
    const query = 'INSERT INTO Trybesmith.Products (name, amount, orderId) VALUES (?, ?, ?)';
    const [{ insertId }] = await this.connection
      .execute(query, [name, amount, null]) as { insertId: number }[];
    return insertId;
  };
}

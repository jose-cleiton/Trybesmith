import { Pool } from 'mysql2/promise';
import connection from './connection';
import ProductModel from './ProductModel';

export default class OrderModel {
  public connection: Pool;

  constructor(private productModels = new ProductModel(connection)) {
    this.connection = connection;
  }

  post = async (userId: number, orderInfo: { productsIds: number[] }) => {
    const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
    const [{ insertId }] = await connection.query(query, [userId]) as { insertId: number }[];
    await Promise.all(orderInfo.productsIds.map((each: number) =>
      this.productModels.update(insertId, each)));
  };

  get = async () => { 
    const query = `SELECT Trybesmith.Orders.id, Trybesmith.Orders.userId, 
                    Trybesmith.Products.id as productsIds 
                    FROM Trybesmith.Orders
                    JOIN Trybesmith.Products
                    ON Trybesmith.Products.orderId = Trybesmith.Orders.id`;
    const [results] = await connection.query(query);
    return results;
  };
}

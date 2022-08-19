import ErrorCustom from '../error/ErrorCustom';
import { Orders } from '../interfaces/OrdersResponse';
import { User } from '../interfaces/UserQueryInfo';
import OrderModel from '../models/OrderModel';
import jwtService from './jwt.service';
import orderInfoQueryValidator from './validations/orderValidator';
import LoginModel from '../models/LoginModel';
import connection from '../models/connection';
import filterData from './filterData';

export default class OrderService {
  public userModels : LoginModel;

  public orderModels : OrderModel;

  constructor(userModels = new LoginModel(connection), orderModels = new OrderModel()) {
    this.userModels = userModels;
    this.orderModels = orderModels;
  }

  async get(): Promise<Orders[]> {
    const results = await this.orderModels.get() as Orders[];
    const resultsFiltered = filterData(results);
    return resultsFiltered;
  }

  async post(token: string, orderInfo: { productsIds: number[] }) {
    const result = jwtService.validateToken(token);
    orderInfoQueryValidator.orderInfoQueryValidator(orderInfo);

    const chckLogin = await this.userModels
      .login(result) as User[];

    if (!chckLogin.length) throw new ErrorCustom(401, 'User is not authorized to save');

    await this.orderModels.post(result.id, orderInfo);
    return result.id;
  }
}

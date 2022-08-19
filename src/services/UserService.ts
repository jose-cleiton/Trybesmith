import jwtService from './jwt.service';
import { User } from '../interfaces/UserQueryInfo';
import userValidator from './validations/userLogin.validator';
import UserModel from '../models/UserModel';
import connection from '../models/connection';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public post = async (userInfo: User): Promise<string> => {
    userValidator.userRegisterQueryValidator(userInfo);
    await this.model.post(userInfo);
    const token = jwtService.createToken(userInfo);
    
    return token;
  };
}

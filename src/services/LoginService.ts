import ErrorCustom from '../error/ErrorCustom';
import { User } from '../interfaces/UserQueryInfo';
import connection from '../models/connection';
import LoginModel from '../models/LoginModel';
import jwtService from './jwt.service';
import userValidator from './validations/userLogin.validator';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public post = async (userInfoToLogin: User) => {
    userValidator.userLoginQueryValidator(userInfoToLogin);

    const isUserRegistered = await this.model
      .login(userInfoToLogin) as User[];

    if (!isUserRegistered.length) {
      throw new ErrorCustom(401, 'Username or password invalid');
    }

    const token = jwtService.createToken(isUserRegistered);
    return token;
  };
}

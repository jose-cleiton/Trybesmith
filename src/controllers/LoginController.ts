import { Request, Response } from 'express';
import LoginService from '../services/LoginService';

export default class LoginController {
  loginService = new LoginService();

  constructor() {
    this.loginService = new LoginService();
  }

  public post = async (req: Request, res: Response) => {
    const { body } = req;
    const results = await this.loginService.post(body);
    res.status(200).json({ token: results });
  };
}

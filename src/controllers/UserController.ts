import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public post = async (req: Request, res: Response) => {
    const { body } = req;
    const results = await this.userService.post(body);
    res.status(201).json({ token: results });
  };
}

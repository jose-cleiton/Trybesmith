import { Router } from 'express';
import LoginController from '../controllers/LoginController';

const loginRoutes = Router();

const loginModel = new LoginController();

loginRoutes.post('/login', loginModel.post);

export default loginRoutes;
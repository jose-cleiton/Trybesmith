import jwt, { JwtPayload } from 'jsonwebtoken';
import ErrorCustom from '../error/ErrorCustom';
import { User } from '../interfaces/UserQueryInfo';

const createToken = (user: User | unknown) => {
  const token = jwt.sign({ data: user }, 'mysegredin', {
    expiresIn: 60 * 60 * 24 * 7,
    algorithm: 'HS256',
  });

  return token;
};

const validateToken = (token: string) => {
  try {
    const { data } = jwt.verify(token, 'mysegredin') as JwtPayload;

    return data[0];
  } catch (error) {
    throw new ErrorCustom(401, 'Invalid token');
  }
};

export default { createToken, validateToken };
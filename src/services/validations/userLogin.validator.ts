import Joi from 'joi';
import ErrorCustom from '../../error/ErrorCustom';
import { User } from '../../interfaces/UserQueryInfo';
import handleStatusType from './handleStatusType';

const userLoginQueryValidator = (userInfoLogin: User) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate(userInfoLogin);
  if (error) throw new ErrorCustom(400, error.message);
};

const userRegisterQueryValidator = (userInfoLogin: User) => {
  const schema = Joi.object({
    username: Joi.string().required().min(3),
    password: Joi.string().required().min(8),
    classe: Joi.string().required().min(3),
    level: Joi.number().min(1).required(),
  });

  const { error } = schema.validate(userInfoLogin);

  if (error) {
    const status = handleStatusType(error.details[0].type);
    throw new ErrorCustom(status, error.message);
  }
};

export default { userLoginQueryValidator, userRegisterQueryValidator };
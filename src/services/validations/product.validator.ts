import Joi from 'joi';
import ErrorCustom from '../../error/ErrorCustom';
import { Product } from '../../interfaces/ProductInfo';
import handleStatusType from './handleStatusType';

const productQueryValidator = (product: Product) => {
  const schema = Joi.object({
    name: Joi.string().required().min(3),
    amount: Joi.string().required().min(3),
  });

  const { error } = schema.validate(product);

  if (error) {
    const status = handleStatusType(error.details[0].type);
    throw new ErrorCustom(status, error.message);
  }
};

export default { productQueryValidator };
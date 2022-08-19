import Joi from 'joi';
import ErrorCustom from '../../error/ErrorCustom';
import handleMessageType from './handleMessageType';
import handleStatusType from './handleStatusType';

const orderInfoQueryValidator = (orderInfo: { productsIds: number[] }): void => {
  const orderSchema = Joi.object({
    productsIds: Joi.array().items(Joi.number().strict().min(1).required()).required(),

  });

  const { error } = orderSchema.validate(orderInfo);
  console.log('ff', error);

  if (error) {
    const status = handleStatusType(error.details[0].type);
    const message = handleMessageType(error.details[0].type);
    throw new ErrorCustom(status, message);
  }
};

export default { orderInfoQueryValidator };
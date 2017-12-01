import Joi from 'joi';

export const userPost = {
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  confirmPassword: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  email: Joi.string().email().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
};

export const userPut = {
  firstName: Joi.string(),
  lastName: Joi.string(),
};
export const userParam = Joi.string().required();

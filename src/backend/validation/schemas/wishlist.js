import Joi from 'joi';

export const wishlistPost = {
  wishlistName: Joi.string().required(),
};

export const wishlistPut = {
};
export const userParam = Joi.string().required();

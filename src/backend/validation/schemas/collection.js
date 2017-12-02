import Joi from 'joi';

export const collectionPost = {
  collectionName: Joi.string().required(),
};

export const collectionPut = {
};
export const userParam = Joi.string().required();

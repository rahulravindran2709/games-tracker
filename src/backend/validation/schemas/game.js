import Joi from 'joi';

export const gameImageQuery = {
  type: Joi.string().required().valid('Cover', 'Screenshot'),
};

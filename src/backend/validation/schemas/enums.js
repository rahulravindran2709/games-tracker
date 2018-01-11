import Joi from 'joi';

const commaSeparatedIdRegex = /\d(,\d)*/;
export const companyParamGet = {
  developers: Joi.string().regex(commaSeparatedIdRegex),
  publishers: Joi.string().regex(commaSeparatedIdRegex),
};

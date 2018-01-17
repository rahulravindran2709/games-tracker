import Joi from 'joi';

export const timesheetPost = {
  startTime: Joi.date().iso().required(),
  endTime: Joi.date().iso().required(),
  timeTaken: Joi.number().required(),
};

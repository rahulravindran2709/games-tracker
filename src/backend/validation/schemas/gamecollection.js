import Joi from 'joi';

export const gameCollectionPost = {
  playthroughs: Joi.string().required(),
};

export const gameCollectionPut = {
};

import Joi from 'joi';

export const gameCollectionPost = {
  playthroughs: Joi.number(),
};

export const gameCollectionPut = {
};

import Joi from 'joi';

export const gameCollectionPost = {
  playthroughs: Joi.string().required(),
};

export const gameCollectionPutParam = {
  collectionid: Joi.number().required(),
  gameid: Joi.number().required(),
};

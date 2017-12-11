import { getServerMethod, getIdRequestParam,
  getCollectionIdRequestParam, getGameIdRequestParam, getPostBody } from '../shared/utils';

const callback = reply => (err, result) => {
  if (err) {
    console.log(err.message, 'Error occurred');
    return reply(err);
  }
  return reply(result);
};

export const getGamesInCollection = (request, reply) =>
  getServerMethod('getGamesByCollectionId')(request)(getIdRequestParam(request), callback(reply));

export const getGamesInWishlist = (request, reply) =>
  getServerMethod('getGamesByWishlistId')(request)(getIdRequestParam(request), callback(reply));

export const getGameMetaDataByCollection = (request, reply) =>
  getServerMethod('getGameMetaDataByCollection')(request)(getCollectionIdRequestParam(request),
getGameIdRequestParam(request), callback(reply));

export const addGameToCollection = (request, reply) =>
getServerMethod('addGameToCollection')(request)(getCollectionIdRequestParam(request), getGameIdRequestParam(request), getPostBody(request)).then(data => reply(data));

import { getServerMethod, getIdRequestParam,
  getCollectionIdRequestParam, getGameIdRequestParam } from '../shared/utils';

const callback = reply => (err, result) => {
  if (err) {
    console.log(err.message, 'Error occurred')
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

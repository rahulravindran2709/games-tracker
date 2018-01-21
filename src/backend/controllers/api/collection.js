import { getServerMethod, getIdRequestParam, getWishlistIdRequestParam,
  getCollectionIdRequestParam, getGameIdRequestParam, getPostBody } from '../shared/utils';

const callback = reply => (err, result) => {
  if (err) {
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
getServerMethod('addGameToCollection')(request)(getCollectionIdRequestParam(request), getGameIdRequestParam(request), getPostBody(request))
.then(data => reply(data))
.catch((error) => {
  console.error(error);
  return reply(error);
});


export const addGameToWishlist = (request, reply) =>
getServerMethod('addGameToWishlist')(request)(getWishlistIdRequestParam(request), getGameIdRequestParam(request), getPostBody(request))
.then(data => reply(data))
.catch(error => reply(error));

export const removeGamesInCollection = (request, reply) =>
  getServerMethod('removeGameInCollection')(request)(getCollectionIdRequestParam(request),
    getGameIdRequestParam(request))
  .then(data => reply(data))
  .catch(error => reply(error));

export const removeGamesInWishlist = (request, reply) =>
    getServerMethod('removeGameInWishlist')(request)(getWishlistIdRequestParam(request),
      getGameIdRequestParam(request))
    .then(data => reply(data))
    .catch(error => reply(error));

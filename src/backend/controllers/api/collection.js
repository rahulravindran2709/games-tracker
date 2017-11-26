import { getServerMethod, getIdRequestParam } from '../shared/utils';

const callback = reply => (err, result) => {
  console.log(err, 'In callback');
  return reply(result);
};

export const getGamesInCollection = (request, reply) =>
  getServerMethod('getGamesByCollectionId')(request)(getIdRequestParam(request), callback(reply));

export const getGamesInWishlist = (request, reply) =>
  getServerMethod('getGamesByWishlistId')(request)(getIdRequestParam(request), callback(reply));

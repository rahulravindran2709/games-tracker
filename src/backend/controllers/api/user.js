import { getServerMethod, getIdRequestParam } from '../shared/utils';

const callback = reply => (err, result) => {
  console.log(err, 'In callback');
  return reply(result);
};

export const getUserById = (request, reply) =>
getServerMethod('getUserById')(request)(getIdRequestParam(request), callback(reply));

export const getUserCollections = (request, reply) =>
  getServerMethod('getUserCollectionsByUserId')(request)(getIdRequestParam(request), callback(reply));

export const getUserWishLists = (request, reply) =>
  getServerMethod('getUserWishListsByUserId')(request)(getIdRequestParam(request), callback(reply));

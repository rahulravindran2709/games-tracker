import { getServerMethod, getIdRequestParam, getPostBody } from '../shared/utils';

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

export const createUser = (request, reply) =>
  getServerMethod('createUser')(request)(getPostBody(request)).then(data => reply(data));

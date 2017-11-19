import { getServerMethod, getIdRequestParam } from '../shared/utils';

const callback = reply => (err, result) => {
  console.log(err, 'In callback');
  return reply(result);
};

export const getUserById = (request, reply) =>
getServerMethod('getUserById')(request)(getIdRequestParam(request), callback(reply));

export const getUserCollections = (request, reply) =>
  getServerMethod('getUserCollections')(request)(getIdRequestParam(request), callback(reply));

export const getUserWishLists = (request, reply) =>
    getServerMethod('getUserWishLists')(request)(getIdRequestParam(request), callback(reply));

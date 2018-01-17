
import { getServerMethod, callback, getIdRequestParam, getUserIdRequestParam, getGameIdRequestParam, getPostBody, getAuthCredentials } from '../shared/utils';


export const authenticateUser = (request, reply) =>
  getServerMethod('authenticateUser')(request)(getPostBody(request)).then(data => reply({
    text: 'Check Auth Header for your Token (JWT)',
    user: data.user })
      .header('Authorization', data.token))
  .catch(error => reply(error));


export const logout = (request, reply) =>
  getServerMethod('logoutUser')(request)(getAuthCredentials(request)).then(() => reply({
    text: 'You have been logged out',
  }))
  .catch(error => reply(error));
export const getUserById = (request, reply) =>
getServerMethod('getUserById')(request)(getIdRequestParam(request), callback(reply));

export const getUserCollections = (request, reply) =>
  getServerMethod('getUserCollectionsByUserId')(request)(getIdRequestParam(request), callback(reply));

export const getUserWishLists = (request, reply) =>
  getServerMethod('getUserWishListsByUserId')(request)(getIdRequestParam(request), callback(reply));

export const createUser = (request, reply) =>
  getServerMethod('createUser')(request)(getPostBody(request)).then(data => reply(data));

export const updateUser = (request, reply) =>
  getServerMethod('updateUser')(request)(getIdRequestParam(request), getPostBody(request)).then(data => reply(data));

export const createUserCollection = (request, reply) =>
  getServerMethod('createUserCollection')(request)(getIdRequestParam(request), getPostBody(request)).then(data => reply(data));

export const createUserWishlist = (request, reply) =>
  getServerMethod('createUserWishlist')(request)(getIdRequestParam(request), getPostBody(request)).then(data => reply(data));

export const getGameCollectionByUser = (request, reply) =>
  getServerMethod('getGameCollectionByUser')(request)(getUserIdRequestParam(request), getGameIdRequestParam(request), callback(reply));

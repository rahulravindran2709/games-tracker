import { path } from 'ramda';
import { getUserById, getUserCollectionsByUserId, getUserWishlistsByUserId,
  getGamesByWishlistId, getGamesByCollectionId, addNewUser, updateUser,
  authenticateUser,
  logoutUser,
  createUserCollection,
createUserWishlist } from './users';
import { getConfiguration } from '../../server/shared/utils';
import { constructUserCollectionMethodOptions,
  constructUserMethodOptions,
  constructUserWishlistMethodOptions,
  constructGameCollectionMethodOptions,
  constructGameWishlistMethodOptions } from './users.config';

const register = (server, options, next) => {
  server.log(['plugin', 'info'], "Registering the 'userservice' plugin");
  const configurationObject = getConfiguration(server);
  const secret = configurationObject.get('apiServer:auth:secret');
  // TODO Remove below line after all methods have been refactored
  const { User, Collection, Wishlist } = path(['plugins', 'datastore', 'DatabaseModels'])(server);
  const models = path(['plugins', 'datastore', 'DatabaseModels'])(server);
  const addUserOptions = { bind: { models: { User } } };
  const addCollectionOptions = { bind: { models: { User, Collection } } };
  const addWishlistOptions = { bind: { models: { User, Wishlist } } };
  const authenticateOptions = { bind: { models: { User }, auth: { secret, app: server.app } } };
  const logoutOptions = { bind: { auth: { app: server.app } } };
  server.method('getUserById', getUserById, constructUserMethodOptions(models));
  server.method('getUserCollectionsByUserId', getUserCollectionsByUserId, constructUserCollectionMethodOptions(models));
  server.method('getUserWishListsByUserId', getUserWishlistsByUserId, constructUserWishlistMethodOptions(models));
  server.method('getGamesByCollectionId', getGamesByCollectionId, constructGameCollectionMethodOptions(models));
  server.method('getGamesByWishlistId', getGamesByWishlistId, constructGameWishlistMethodOptions(models));
  server.method('createUser', addNewUser, addUserOptions);
  server.method('updateUser', updateUser, addUserOptions);
  server.method('createUserCollection', createUserCollection, addCollectionOptions);
  server.method('createUserWishlist', createUserWishlist, addWishlistOptions);
  server.method('authenticateUser', authenticateUser, authenticateOptions);
  server.method('logoutUser', logoutUser, logoutOptions);
  return next();
};
register.attributes = {
  name: 'userService',
  dependencies: 'datastore',
};
export default register;

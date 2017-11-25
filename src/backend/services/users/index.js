import { path } from 'ramda';
import { getUserById, getUserCollectionsByUserId } from './users';

const serverMethodOptions = {
  callback: false,
  cache: {
    cache: 'diskCache',
    expiresIn: 30 * 1000,
    generateTimeout: 10000,
  },
  bind: {},
};
const register = (server, options, next) => {
  server.log(['plugin', 'info'], "Registering the 'userservice' plugin");
  const { User, Collection, User_Collection: UserCollection } = path(['plugins', 'datastore', 'DatabaseModels'])(server);
  const userMethodOptions = { ...serverMethodOptions,
    bind: { model: User } };
  const userCollectionMethodOptions = {
    ...serverMethodOptions,
    bind: {
      models: {
        User, Collection,
      },
    },
  };
  server.method('getUserById', getUserById, userMethodOptions);
  server.method('getUserCollectionsByUserId', getUserCollectionsByUserId, userCollectionMethodOptions);
  return next();
};
register.attributes = {
  name: 'userService',
  dependencies: 'datastore',
};
export default register;

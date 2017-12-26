import { path } from 'ramda';
import { getUserById, getUserCollectionsByUserId, getUserWishlistsByUserId,
  getGamesByWishlistId, getGamesByCollectionId, addNewUser, updateUser,
  authenticateUser,
  createUserCollection,
createUserWishlist } from './users';
import { getConfiguration } from '../../server/shared/utils';

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
  const configurationObject = getConfiguration(server);
  const secret = configurationObject.get('apiServer:auth:secret');
  const { User, Collection, Wishlist, Game } = path(['plugins', 'datastore', 'DatabaseModels'])(server);
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
  const userWishlistMethodOptions = {
    ...serverMethodOptions,
    bind: {
      models: {
        User, Wishlist,
      },
    },
  };

  const gameWishlistMethodOptions = {
    ...serverMethodOptions,
    bind: {
      models: {
        Game, Wishlist,
      },
    },
  };
  const gameCollectionMethodOptions = {
    ...serverMethodOptions,
    bind: {
      models: {
        Game, Collection,
      },
    },
  };
  const addUserOptions = {
    bind: {
      models: {
        User,
      },
    },
  };
  const addCollectionOptions = {
    bind: {
      models: {
        User, Collection,
      },
    },
  };
  const addWishlistOptions = {
    bind: {
      models: {
        User, Wishlist,
      },
    },
  };
  const authenticateOptions = {
    bind: {
      models: {
        User,
      },
      auth: {
        secret,
        app: server.app,
      },
    },
  };
  server.method('getUserById', getUserById, userMethodOptions);
  server.method('getUserCollectionsByUserId', getUserCollectionsByUserId, userCollectionMethodOptions);
  server.method('getUserWishListsByUserId', getUserWishlistsByUserId, userWishlistMethodOptions);
  server.method('getGamesByCollectionId', getGamesByCollectionId, gameCollectionMethodOptions);
  server.method('getGamesByWishlistId', getGamesByWishlistId, gameWishlistMethodOptions);
  server.method('createUser', addNewUser, addUserOptions);
  server.method('updateUser', updateUser, addUserOptions);
  server.method('createUserCollection', createUserCollection, addCollectionOptions);
  server.method('createUserWishlist', createUserWishlist, addWishlistOptions);
  server.method('authenticateUser', authenticateUser, authenticateOptions);
  return next();
};
register.attributes = {
  name: 'userService',
  dependencies: 'datastore',
};
export default register;

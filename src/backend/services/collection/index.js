
import { getGameMetaDataByCollection, addGameToCollection, addGameToWishlist } from './collection';
import { getDatabaseModels } from '../shared/utils';

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
  server.log(['plugin', 'info'], "Registering the 'collectionService' plugin");
  const { Game_Collection, Collection, Wishlist, Game, Timesheet } = getDatabaseModels(server);
  const getGameMetadataOptions = { ...serverMethodOptions,
    bind: {
      models: {
        Game_Collection, Timesheet,
      } } };
  const addGameCollectionOptions = {
    bind: {
      models: {
        Collection, Game,
      },
    },
  };
  const addGameWishlistOptions = {
    bind: {
      models: {
        Wishlist, Game,
      },
    },
  };
  server.method('getGameMetaDataByCollection', getGameMetaDataByCollection, getGameMetadataOptions);
  server.method('addGameToCollection', addGameToCollection, addGameCollectionOptions);
  server.method('addGameToWishlist', addGameToWishlist, addGameWishlistOptions);
  return next();
};
register.attributes = {
  name: 'collectionService',
  dependencies: 'datastore',
};
export default register;

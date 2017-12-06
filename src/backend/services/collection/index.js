
import { getGameMetaDataByCollection } from './collection';
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
  const { Game_Collection } = getDatabaseModels(server);
  const getGameMetadataOptions = { ...serverMethodOptions,
    bind: {
      models: {
        Game_Collection,
      } } };
  server.method('getGameMetaDataByCollection', getGameMetaDataByCollection, getGameMetadataOptions);
  return next();
};
register.attributes = {
  name: 'collectionService',
  dependencies: 'datastore',
};
export default register;

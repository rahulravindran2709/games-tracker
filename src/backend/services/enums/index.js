import { getGenreById, getPegiRatingById, getEsrbRatingById } from './enums';

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
  server.log(['plugin', 'info'], "Registering the 'enumService' plugin");
  console.log(server.plugins.datastore.DatabaseModels, 'server plugins')
  const methodOptionsWithDb = { ...serverMethodOptions,
    bind: { model: server.plugins.datastore.DatabaseModels } };
  server.method('getGenreById', getGenreById, methodOptionsWithDb);
  server.method('getPegiRatingById', getPegiRatingById, methodOptionsWithDb);
  server.method('getEsrbRatingById', getEsrbRatingById, methodOptionsWithDb);
  return next();
};
register.attributes = {
  name: 'enumService',
  dependencies: 'datastore',
};
export default register;

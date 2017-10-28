import { path } from 'ramda';
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
  const [Genre, Pegi_rating] = path(['plugins', 'datastore', 'DatabaseModels'])(server);
  const methodOptionsWithDb = { ...serverMethodOptions,
    bind: { model: Genre } };


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

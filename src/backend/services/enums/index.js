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
  const { Genres, Pegi_ratings, Esrb_ratings } = path(['plugins', 'datastore', 'DatabaseModels'])(server);
  const genreMethodOptions = { ...serverMethodOptions,
    bind: { model: Genres } };
  const pegiMethodOptions = { ...serverMethodOptions,
    bind: { model: Pegi_ratings } };
  const esrbMethodOptions = { ...serverMethodOptions,
    bind: { model: Esrb_ratings } };
  server.method('getGenreById', getGenreById, genreMethodOptions);
  server.method('getPegiRatingById', getPegiRatingById, pegiMethodOptions);
  server.method('getEsrbRatingById', getEsrbRatingById, esrbMethodOptions);
  return next();
};
register.attributes = {
  name: 'enumService',
  dependencies: 'datastore',
};
export default register;

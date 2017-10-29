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
  const [Genre, PegiRating, EsrbRating] = path(['plugins', 'datastore', 'DatabaseModels'])(server);
  const genreMethodOptions = { ...serverMethodOptions,
    bind: { model: Genre } };
  const pegiMethodOptions = { ...serverMethodOptions,
    bind: { model: PegiRating } };
  const esrbMethodOptions = { ...serverMethodOptions,
    bind: { model: EsrbRating } };


    console.log(pegiMethodOptions, 'pegiMethodOptions')
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
import { path } from 'ramda';
import { getGames, getGameById, getGenreById } from './igdb';

const serverMethodOptions = {
  callback: false,
  cache: {
    cache: 'diskCache',
    expiresIn: 30 * 1000,
    generateTimeout: 10000,
  },
};
const register = (server, options, next) => {
  const { Game, Game_Links, Game_Images } = path(['plugins', 'datastore', 'DatabaseModels'])(server);
  server.method('search', getGames, { ...serverMethodOptions,
    generateKey: params => (`${params.term || ''}${params.zone || ''}`) });
  const geGameByIdOptions = {
    ...serverMethodOptions,
    bind: {
      models: {
        Game, Game_Links, Game_Images,
      },
    },
  };
  server.method('getGameById', getGameById, geGameByIdOptions);
  server.method('getGenreGameById', getGenreById, serverMethodOptions);
  return next();
};
register.attributes = {
  name: 'igdbService',
};
export default register;

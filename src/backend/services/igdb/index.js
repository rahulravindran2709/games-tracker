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
  server.method('search', getGames, { ...serverMethodOptions,
    generateKey: params => (`${params.term || ''}${params.zone || ''}`) });
  server.method('getGameById', getGameById, serverMethodOptions);
  server.method('getGenreGameById', getGenreById, serverMethodOptions);
  return next();
};
register.attributes = {
  name: 'igdbService',
};
export default register;

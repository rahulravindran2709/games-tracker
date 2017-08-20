import nodeify from 'nodeify';
import { getGames, getGameById } from './igdb';


const register = (server, options, next) => {
  server.method({
    name: 'search',
    method: getGames,
    options: {
      callback: false,
    },
  });
  server.method({
    name: 'getGameById',
    method: getGameById,
    options: {
      callback: false,
    },
  });
  return next();
};
register.attributes = {
  name: 'igdbService',
};
export default register;

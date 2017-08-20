import nodeify from 'nodeify';
import { getGames, getGameById } from './igdb';


const register = (server, options, next) => {
  server.method({
    name: 'search',
    method: (searchOptions, callback) => nodeify(getGames(searchOptions), callback),
    options: {
      callback: true,
      cache: {
        expiresIn: 36000,
        generateTimeout: 100,
      },
      generateKey: params => (`${params.term || ''}${params.zone || ''}`),
    },
  });
  server.method({
    name: 'getGameById',
    method: (id, callback) => nodeify(getGameById(id), callback),
    options: {
      callback: true,
      cache: {
        expiresIn: 36000,
        generateTimeout: 100,
      },
    },
  });
  return next();
};
register.attributes = {
  name: 'igdbService',
};
export default register;

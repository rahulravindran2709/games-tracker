import { path } from 'ramda';
import { getUserById, getPegiRatingById, getEsrbRatingById } from './users';

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
  server.log(['plugin', 'info'], "Registering the 'userservice' plugin");
  const { User, Collection, User_Collection: UserCollection } = path(['plugins', 'datastore', 'DatabaseModels'])(server);
  const genreMethodOptions = { ...serverMethodOptions,
    bind: { model: User } };
  server.method('getUserById', getUserById, genreMethodOptions);
  return next();
};
register.attributes = {
  name: 'enumService',
  dependencies: 'datastore',
};
export default register;

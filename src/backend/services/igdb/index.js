import { path } from 'ramda';
import { getGames, getGameById, getGenreById, getGameImagesByGameId, getGameLinksByGameId } from './igdb';
import { constructGetGameOptions, constructSearchOptions, constructGetGameLinkOptions, constructGetGameImageOptions } from './igdb.config';

const register = (server, options, next) => {
  const models = path(['plugins', 'datastore', 'DatabaseModels'])(server);
  server.method('search', getGames, constructSearchOptions());
  server.method('getGameById', getGameById, constructGetGameOptions(models));
  server.method('getGenreGameById', getGenreById, constructGetGameOptions(models));
  server.method('getGameImagesByGameId', getGameImagesByGameId, constructGetGameImageOptions(models));
  server.method('getGameLinksByGameId', getGameLinksByGameId, constructGetGameLinkOptions(models));
  return next();
};
register.attributes = {
  name: 'igdbService',
};
export default register;

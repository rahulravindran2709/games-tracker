
import { getServerMethod, getIdRequestParam, getGameIdRequestParam } from '../shared/utils';


const callback = reply => (err, result) => {
  if (err) {
    return reply(err);
  }
  return reply(result);
};

export const getGames = (request, reply) => {
  const { term, zone } = request.query;
  getServerMethod('search')(request)({ term, zone }, callback(reply));
};
export const getGameById = (request, reply) =>
  getServerMethod('getGameById')(request)(getIdRequestParam(request), callback(reply));

export const getGameGenreById = (request, reply) =>
  getServerMethod('getGenreGameById')(request)(getIdRequestParam(request), callback(reply));

export const getGameImagesByGameId = (request, reply) =>
  getServerMethod('getGameImagesByGameId')(request)(getGameIdRequestParam(request), request.query.type, callback(reply));

export const getGameLinksByGameId = (request, reply) =>
  getServerMethod('getGameLinksByGameId')(request)(getGameIdRequestParam(request), callback(reply));
export default {
  getGames,
  getGameById,
  getGameGenreById,
};

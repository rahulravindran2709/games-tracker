
import { getServerMethod, getIdRequestParam } from '../shared/utils';


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

export default {
  getGames,
  getGameById,
  getGameGenreById,
};

import { path } from 'ramda';

const getServerMethod = methodName => path(['server', 'methods', methodName]);
const getRequestParam = paramName => path(['params', paramName]);
const getIdRequestParam = getRequestParam('id');

const callback = reply => (err, result) => {
  console.log(err, 'In callback');
  if (err) {
    return reply(require('../../../../data/dummy').data[0]);
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

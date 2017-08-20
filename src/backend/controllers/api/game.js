import { path } from 'ramda';

const getServerMethod = methodName => path(['server', 'methods', methodName]);
const getRequestParam = paramName => path(['params', paramName]);
const getIdRequestParam = getRequestParam('id');

const callback = reply => (err, data) => reply(data);

export const getGames = (request, reply) => {
  const { term, zone } = request.query;
  console.log(request.query, 'In search games controller');
  getServerMethod('search')(request)({ term, zone }, callback(reply));
};
export const getGameById = (request, reply) =>
  getServerMethod('getGameById')(request)(getIdRequestParam(request), callback(reply));

export default {
  getGames,
  getGameById,
};

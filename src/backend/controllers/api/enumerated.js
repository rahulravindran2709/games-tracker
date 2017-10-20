import { getServerMethod, getIdRequestParam } from '../shared/utils';

const callback = reply => (err, result) => {
  console.log(err, 'In callback');
  return reply(result);
};

export const getGenreById = (request, reply) =>
getServerMethod('getGenreById')(request)(getIdRequestParam(request), callback(reply));

export const getPegiRatingById = (request, reply) =>
  getServerMethod('getGameById')(request)(getIdRequestParam(request), callback(reply));

export const getEsrbRatingById = (request, reply) =>
    getServerMethod('getGameById')(request)(getIdRequestParam(request), callback(reply));

export default {
  getGenreById,
  getPegiRatingById,
  getEsrbRatingById,
};

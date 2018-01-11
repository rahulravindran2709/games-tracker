import Boom from 'boom';
import { getServerMethod, getIdRequestParam } from '../shared/utils';


const callback = reply => (err, result) => {
  if (err) {
    return reply(Boom.badRequest(err));
  }
  return reply(result);
};

export const getGenreById = (request, reply) =>
  getServerMethod('getGenreById')(request)(getIdRequestParam(request), callback(reply));

export const getPegiRatingById = (request, reply) =>
  getServerMethod('getPegiRatingById')(request)(getIdRequestParam(request), callback(reply));

export const getEsrbRatingById = (request, reply) =>
  getServerMethod('getEsrbRatingById')(request)(getIdRequestParam(request), callback(reply));

export const getCompaniesById = (request, reply) =>
  getServerMethod('getCompaniesById')(request)(request.query.developers, request.query.publishers, callback(reply));

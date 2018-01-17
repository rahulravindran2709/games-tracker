import { getServerMethod, getIdRequestParam, callback } from '../shared/utils';

export const getGenreById = (request, reply) =>
  getServerMethod('getGenreById')(request)(getIdRequestParam(request), callback(reply));

export const getPegiRatingById = (request, reply) =>
  getServerMethod('getPegiRatingById')(request)(getIdRequestParam(request), callback(reply));

export const getEsrbRatingById = (request, reply) =>
  getServerMethod('getEsrbRatingById')(request)(getIdRequestParam(request), callback(reply));

export const getCompaniesById = (request, reply) =>
  getServerMethod('getCompaniesById')(request)(request.query.developers, request.query.publishers, callback(reply));

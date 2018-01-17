import { getServerMethod, getIdRequestParam, getCollectionIdRequestParam, getGameIdRequestParam, getPostBody } from '../shared/utils';

const callback = reply => (err, result) => reply(result);

export const getTimesheetsByGameEntry = (request, reply) =>
  getServerMethod('getTimesheetsByGameEntry')(request)(getIdRequestParam(request), getGameIdRequestParam(request), callback(reply));

export const addTimesheet = (request, reply) =>
  getServerMethod('addTimesheetEntry')(request)(getCollectionIdRequestParam(request),
  getGameIdRequestParam(request), getPostBody(request))
  .then(data => reply(data))
  .catch(error => reply(error));

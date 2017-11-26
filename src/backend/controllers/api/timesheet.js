import { getServerMethod, getIdRequestParam, getGameIdRequestParam } from '../shared/utils';

const callback = reply => (err, result) => {
  console.log(err, 'In callback');
  return reply(result);
};

export const getTimesheetsByGameEntry = (request, reply) =>
  getServerMethod('getTimesheetsByGameEntry')(request)(getIdRequestParam(request), getGameIdRequestParam(request), callback(reply));

export const addTimesheet = (request, reply) =>
  getServerMethod('addTimesheetToGame')(request)(getIdRequestParam(request), callback(reply));

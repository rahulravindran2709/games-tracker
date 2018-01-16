import { path } from 'ramda';
import { getTimesheetEntriesByGameCollection, addTimesheetEntry } from './timesheet';

const serverMethodOptions = {
  callback: false,
  cache: {
    cache: 'diskCache',
    expiresIn: 30 * 1000,
    generateTimeout: 10000,
  },
  bind: {},
};
const register = (server, options, next) => {
  server.log(['plugin', 'info'], "Registering the 'timeservice' plugin");
  const { Timesheet, Game_Collection } = path(['plugins', 'datastore', 'DatabaseModels'])(server);
  const timesheetByGameCollectionOptions = {
    ...serverMethodOptions,
    bind: {
      models: {
        Game_Collection, Timesheet,
      },
    },
  };
  const addTimesheetOptions = {
    bind: {
      models: {
        Game_Collection, Timesheet,
      },
    },
  };
  server.method('getTimesheetsByGameEntry', getTimesheetEntriesByGameCollection, timesheetByGameCollectionOptions);
  server.method('addTimesheetEntry', addTimesheetEntry, addTimesheetOptions);
  return next();
};
register.attributes = {
  name: 'timeService',
  dependencies: 'datastore',
};
export default register;

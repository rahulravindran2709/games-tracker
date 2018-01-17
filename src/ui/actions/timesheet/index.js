import { CALL_API, POST, PUT, GET } from 'middlewares/api';
import { ADD_TIMESHEET_ENTRY, UPDATE_TIMESHEET_ENTRY, GET_TIMESHEETS } from 'constants/timesheet/actions';
import { ADD_TIMESHEET_ENTRY as ADD_TIMESHEET_ENTRY_URL,
  UPDATE_TIMESHEET_ENTRY as UPDATE_TIMESHEET_ENTRY_URL, GET_TIMESHEETS as GET_TIMESHEETS_URL } from 'constants/timesheet/urls';

export const submitTimesheetEntry = ({ gameId, collectionId, ...body }) => ({
  type: CALL_API,
  payload: {
    auth: true,
    method: POST,
    requestName: ADD_TIMESHEET_ENTRY,
    url: `${ADD_TIMESHEET_ENTRY_URL(collectionId, gameId)}`,
    body,
  },
});

export const updateTimesheetEntry = ({ gameId, collectionId, ...body }) => ({
  type: CALL_API,
  payload: {
    auth: true,
    method: PUT,
    requestName: UPDATE_TIMESHEET_ENTRY,
    url: `${UPDATE_TIMESHEET_ENTRY_URL(collectionId, gameId)}`,
    body,
  },
});

export const getTimesheetEntries = (collectionId, gameId) => ({
  type: CALL_API,
  payload: {
    auth: true,
    method: GET,
    requestName: GET_TIMESHEETS,
    url: `${GET_TIMESHEETS_URL(collectionId, gameId)}`,
  },
});

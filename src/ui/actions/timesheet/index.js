import { CALL_API, POST, PUT } from 'middlewares/api';
import { ADD_TIMESHEET_ENTRY, UPDATE_TIMESHEET_ENTRY } from 'constants/timesheet/actions';
import { ADD_TIMESHEET_ENTRY as ADD_TIMESHEET_ENTRY_URL,
  UPDATE_TIMESHEET_ENTRY as UPDATE_TIMESHEET_ENTRY_URL } from 'constants/timesheet/urls';

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

import { OPEN_ADD_GAME_DIALOG, CLOSE_ADD_GAME_DIALOG,
  OPEN_ADD_TIMESHEET_DIALOG, CLOSE_ADD_TIMESHEET_DIALOG } from 'constants/dialogs/actions';
import { getActionType } from './shared/utils';

const initialState = {
  isAddGameOpen: false,
  isAddTimesheetOpen: false,
  dialogType: '',
};
const dialogs = (state = initialState, action) => {
  const type = getActionType(action);
  const { payload } = action;
  switch (type) {
    case OPEN_ADD_GAME_DIALOG:
      return { ...state, isAddGameOpen: true, dialogType: payload.dialogType };
    case CLOSE_ADD_GAME_DIALOG:
      return { ...state, isAddGameOpen: false, dialogType: '' };
    case OPEN_ADD_TIMESHEET_DIALOG:
      return { ...state, isAddTimesheetOpen: true };
    case CLOSE_ADD_TIMESHEET_DIALOG:
      return { ...state, isAddTimesheetOpen: false };
    default:
      return state;
  }
};
export default dialogs;

import { OPEN_ADD_GAME_DIALOG, CLOSE_ADD_GAME_DIALOG,
  OPEN_ADD_TIMESHEET_DIALOG, CLOSE_ADD_TIMESHEET_DIALOG } from 'constants/dialogs/actions';
import { getActionType } from './shared/utils';

const initialState = {
  addTimesheet: {
    isOpen: false,
    gameDetails: null,
    collectionDetails: null,
  },
  addGame: {
    isOpen: false,
    dialogType: '',
  },
};
const dialogs = (state = initialState, action) => {
  const type = getActionType(action);
  const { payload } = action;
  switch (type) {
    case OPEN_ADD_GAME_DIALOG:
      return { ...state,
        addGame: { ...state.addGame, isOpen: true, dialogType: payload.dialogType } };
    case CLOSE_ADD_GAME_DIALOG:
      return { ...state,
        addGame: { ...state.addGame, isOpen: false, dialogType: '' } };
    case OPEN_ADD_TIMESHEET_DIALOG:
      return { ...state,
        addTimesheet: { ...state.addTimesheet,
          isOpen: true,
          gameDetails: payload.gameDetails,
          collectionDetails: payload.collectionDetails } };
    case CLOSE_ADD_TIMESHEET_DIALOG:
      return { ...state,
        addTimesheet: { ...state.addTimesheet, isOpen: false } };
    default:
      return state;
  }
};
export default dialogs;

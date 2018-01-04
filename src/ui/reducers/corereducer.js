import { TOGGLE_DRAWER, SEARCH_FULFILLED } from 'actions/types';
import { ADD_MSG_SNACKBAR, DISPLAY_MSG_SNACKBAR, CLOSE_MSG_SNACKBAR } from 'constants/common/actions';
import { getActionType, getPayloadData } from './shared/utils';

const initialState = {
  isDrawerOpen: false,
  search: {
    term: '',
    zone: 'games',
    results: [],
  },
  messages: [],
  currentMessage: null,
  isSnackbarOpen: false,
};

const core = (state = initialState, action) => {
  const type = getActionType(action);
  const data = getPayloadData(action);
  switch (type) {
    case TOGGLE_DRAWER:
      return { ...state, isDrawerOpen: !state.isDrawerOpen };
    case SEARCH_FULFILLED:
      return { ...state,
        search: { ...state.search, results: data } };
    case ADD_MSG_SNACKBAR:
      return { ...state, messages: state.messages.concat([data.message]) };
    case DISPLAY_MSG_SNACKBAR:
      return { ...state, currentMessage: data.message, isSnackbarOpen: true };
    case CLOSE_MSG_SNACKBAR:
      return { ...state, currentMessage: '', isSnackbarOpen: false };
    default:
      return state;
  }
};
export default core;

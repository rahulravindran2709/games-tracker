import { getJSONFromServer } from 'utils/xhr';
import { push } from 'react-router-redux';
import { CALL_API, GET } from 'middlewares/api';
import { ADD_MSG_SNACKBAR, DISPLAY_MSG_SNACKBAR, CLOSE_MSG_SNACKBAR,
  CLEAR_MSG_SNACKBAR } from 'constants/common/actions';
import { GET_GAME_COLLECTION_BY_USERID } from 'constants/game/actions';
import { GET_GAME_COLLECTION_BY_USERID as GAME_COLLECTION_URL } from 'constants/game/urls';

import { TOGGLE_DRAWER, SEARCH, SEARCH_FULFILLED, GET_GAME_BY_ID } from './types';


export const toggleDrawer = () => ({
  type: TOGGLE_DRAWER,
});

export const search = searchCriteria => dispatch =>
  dispatch({
    type: SEARCH,
    payload: {
      promise: getJSONFromServer('/search', searchCriteria),
    },
  }).then(() => dispatch(push('/searchresults')));
export const searchSuccess = results => ({
  type: SEARCH_FULFILLED,
  payload: results,
});
export const lookupGamesByName = searchTerm => ({
  type: GET_GAME_BY_ID,
  payload: searchTerm,
});

export const getGameById = id =>
({
  type: CALL_API,
  payload: {
    auth: true,
    method: GET,
    requestName: GET_GAME_BY_ID,
    url: `/games/${id}`,
  },
});

export const checkIfGamePartOfCollection = (userId, gameId) => (
  {
    type: CALL_API,
    payload: {
      auth: true,
      method: GET,
      requestName: GET_GAME_COLLECTION_BY_USERID,
      url: GAME_COLLECTION_URL(userId, gameId),
    },
  }
);
export const gameDetailsInit = (userId, gameId) => dispatch =>
  dispatch(getGameById(gameId))
  .then(() => dispatch(checkIfGamePartOfCollection(userId, gameId)));

export const closeSnackbar = () => ({
  type: CLOSE_MSG_SNACKBAR,
});
export const displayMessageInSnackbar = message =>
({
  type: DISPLAY_MSG_SNACKBAR,
  payload: {
    data: {
      message,
    },
  },
});
export const addMessageToSnackbar = message => ({
  type: ADD_MSG_SNACKBAR,
  payload: {
    data: {
      message,
    },
  },
});
export const emptySnackbarMessageQueue = () => ({
  type: CLEAR_MSG_SNACKBAR,
});
export const addMessageToSnackbarQueue = message => (dispatch, getState) => {
  dispatch(addMessageToSnackbar(message));
  const { corereducer: { messages } } = getState();
  const accumInit = Promise.resolve('');
  messages.reduce((accum, currentMessage) =>
  accum
  .then(() => new Promise((resolve) => {
    dispatch(displayMessageInSnackbar(currentMessage));
    return setTimeout(() => resolve(dispatch(closeSnackbar())), 1000);
  }))
  .then(() => new Promise(resolve => setTimeout(() => resolve(), 1000))),
  accumInit)
  .then(() => dispatch(emptySnackbarMessageQueue()));
};

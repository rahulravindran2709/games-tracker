import { LOGIN_STARTED, LOGIN_SUCCESS, TOGGLE_DRAWER, SEARCH_GAMES, GET_GAME_BY_ID } from './types';

export const startLogin = () =>
  ({
    type: LOGIN_STARTED,
  });
export const loginSucceeded = data =>
  ({
    type: LOGIN_SUCCESS,
    payload: data,
  });
export const toggleDrawer = () => ({
  type: TOGGLE_DRAWER,
});

export const searchGames = () => ({
  type: SEARCH_GAMES,
});
export const lookupGamesByName = searchTerm => dispatch => ({
  type: GET_GAME_BY_ID,
  payload: searchTerm,
});

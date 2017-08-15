import { getJSONFromServer } from 'utils/xhr';
import { LOGIN_STARTED, LOGIN_SUCCESS, TOGGLE_DRAWER, SEARCH, SEARCH_FULFILLED, GET_GAME_BY_ID } from './types';

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

export const search = (searchCriteria) => {
  return {
    type: SEARCH,
    payload: getJSONFromServer('/search', searchCriteria),
  };
};
export const searchSuccess = results => ({
  type: SEARCH_FULFILLED,
  payload: results,
});
export const lookupGamesByName = searchTerm => ({
  type: GET_GAME_BY_ID,
  payload: searchTerm,
});

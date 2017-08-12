import { LOGIN_STARTED, LOGIN_SUCCESS, TOGGLE_DRAWER } from './types';

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

import { FULFILLED } from 'redux-promise-middleware';

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const AUTHENTICATE_FULFILLED = `${AUTHENTICATE}_${FULFILLED}`;
export const LOGOUT_FULFILLED = `${LOGOUT}_${FULFILLED}`;

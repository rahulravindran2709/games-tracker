import { FULFILLED, REJECTED } from 'redux-promise-middleware';

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const AUTHENTICATE_FULFILLED = `${AUTHENTICATE}_${FULFILLED}`;
export const AUTHENTICATE_REJECTED = `${AUTHENTICATE}_${REJECTED}`;
export const LOGOUT_FULFILLED = `${LOGOUT}_${FULFILLED}`;
export const LOGOUT_REJECTED = `${LOGOUT}_${REJECTED}`;
export const REGISTER = 'REGISTER';
export const REGISTER_FULFILLED = `${REGISTER}_${FULFILLED}`;
export const REGISTER_REJECTED = `${REGISTER}_${REJECTED}`;

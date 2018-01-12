import { FULFILLED } from 'redux-promise-middleware';

export const GET_GENRES_BY_ID = 'GET_GENRES_BY_ID';
export const GET_PEGI_RATING_BY_ID = 'GET_PEGI_RATING_BY_ID';
export const GET_ESRB_RATING_BY_ID = 'GET_ESRB_RATING_BY_ID';
export const GET_COMPANY_BY_ID = 'GET_COMPANY_BY_ID';
export const GET_GENRES_BY_ID_FULFILLED = `${GET_GENRES_BY_ID}_${FULFILLED}`;
export const GET_PEGI_RATING_BY_ID_FULFILLED = `${GET_PEGI_RATING_BY_ID}_${FULFILLED}`;
export const GET_ESRB_RATING_BY_ID_FULFILLED = `${GET_ESRB_RATING_BY_ID}_${FULFILLED}`;
export const GET_COMPANY_BY_ID_FULFILLED = `${GET_COMPANY_BY_ID}_${FULFILLED}`;

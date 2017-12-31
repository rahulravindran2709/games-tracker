import { postJSONToServer } from 'utils/xhr';
import { AUTHENTICATE, LOGOUT } from 'constants/auth/actions';
import { STORAGE_NAME } from 'constants/auth';
import { AUTHENTICATE as AUTHENTICATE_URL, LOGOUT as LOGOUT_URL } from 'constants/auth/urls';
import { push } from 'react-router-redux';

export const authenticate = credentials => dispatch =>
  dispatch({
    type: AUTHENTICATE,
    payload: {
      promise: postJSONToServer(`${AUTHENTICATE_URL}`, credentials),
    },
  }).then(() => dispatch(push('/dashboard')));

export const logout = () => dispatch =>
  dispatch({
    type: LOGOUT,
    payload: {
      promise: postJSONToServer(LOGOUT_URL),
    },
  })
  .then(() => localStorage.removeItem(STORAGE_NAME))
  .then(() => dispatch(push('/login')));

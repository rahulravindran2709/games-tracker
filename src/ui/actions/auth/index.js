import { postJSONToServer } from 'utils/xhr';
import { AUTHENTICATE, LOGOUT } from 'constants/auth/actions';
import { AUTHENTICATE as AUTHENTICATE_URL, LOGOUT as LOGOUT_URL } from 'constants/auth/urls';
import { push } from 'react-router-redux';

export const authenticate = credentials => dispatch =>
  dispatch({
    type: AUTHENTICATE,
    payload: {
      promise: postJSONToServer(`${AUTHENTICATE_URL}`, credentials),
    },
  }).then(() => dispatch(push('/dashboard')));

export const logout = () =>
  ({
    type: LOGOUT,
    payload: {
      promise: postJSONToServer(LOGOUT_URL),
    },
  });

import { CALL_API, POST } from 'middlewares/api';
import { AUTHENTICATE, LOGOUT } from 'constants/auth/actions';
import { AUTHENTICATE as AUTHENTICATE_URL, LOGOUT as LOGOUT_URL } from 'constants/auth/urls';
import { push } from 'react-router-redux';


export const authenticate = credentials => dispatch =>
dispatch({
  type: CALL_API,
  payload: {
    auth: false,
    method: POST,
    requestName: AUTHENTICATE,
    url: `${AUTHENTICATE_URL}`,
    body: credentials,
  },
})
.then(() => dispatch(push('/dashboard')));

export const logout = () => dispatch =>
dispatch({
  type: CALL_API,
  payload: {
    auth: true,
    method: POST,
    requestName: LOGOUT,
    url: LOGOUT_URL,
  },
})
  .then(() => dispatch(push('/login')));

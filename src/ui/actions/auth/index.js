import { CALL_API, POST } from 'middlewares/api';
import { AUTHENTICATE, LOGOUT, REGISTER } from 'constants/auth/actions';
import { AUTHENTICATE as AUTHENTICATE_URL, LOGOUT as LOGOUT_URL, REGISTER as REGISTER_URL } from 'constants/auth/urls';
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

export const registerUser = user => dispatch =>
dispatch({
  type: CALL_API,
  payload: {
    auth: true,
    method: POST,
    requestName: REGISTER,
    url: REGISTER_URL,
    body: user,
  },
})
.then(() => dispatch(push('/dashboard')));

import { postJSONToServer } from 'utils/xhr';
import { AUTHENTICATE, LOGOUT } from 'constants/auth/actions';
import { AUTHENTICATE as AUTHENTICATE_URL, LOGOUT as LOGOUT_URL } from 'constants/auth/urls';

export const authenticate = credentials =>
  ({
    type: AUTHENTICATE,
    payload: {
      promise: postJSONToServer(`${AUTHENTICATE_URL}`, credentials),
    },
  });

export const logout = () =>
  ({
    type: LOGOUT,
    payload: {
      promise: postJSONToServer(LOGOUT_URL),
    },
  });

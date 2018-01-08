import { AUTHENTICATE_FULFILLED,
   LOGOUT_FULFILLED,
   LOGOUT_REJECTED } from 'constants/auth/actions';
import { getActionType } from './shared/utils';

const initialState = {
  token: null,
  username: null,
};
const auth = (state = initialState, action) => {
  const type = getActionType(action);
  switch (type) {
    case AUTHENTICATE_FULFILLED:
      return { ...state, token: action.payload.headers.authorization };
    case LOGOUT_FULFILLED:
    case LOGOUT_REJECTED:
      return { ...state, token: null, username: null };
    default:
      return state;
  }
};
export default auth;

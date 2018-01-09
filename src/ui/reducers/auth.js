import { AUTHENTICATE_FULFILLED,
   LOGOUT_FULFILLED,
   LOGOUT_REJECTED } from 'constants/auth/actions';
import { getActionType, getPayloadData } from './shared/utils';

const initialState = {
  token: null,
  user: null,
};
const auth = (state = initialState, action) => {
  const type = getActionType(action);
  const data = getPayloadData(action);
  switch (type) {
    case AUTHENTICATE_FULFILLED:
      return { ...state,
        token: action.payload.headers.authorization,
        user: data.user };
    case LOGOUT_FULFILLED:
    case LOGOUT_REJECTED:
      return { ...state, token: null, user: null };
    default:
      return state;
  }
};
export default auth;

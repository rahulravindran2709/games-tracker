import { AUTHENTICATE_FULFILLED,
  AUTHENTICATE_REJECTED,
   LOGOUT_FULFILLED } from 'constants/auth/actions';
import { getActionType, getPayloadData, getErrorMessage } from './shared/utils';

const initialState = {
  token: null,
  username: null,
  errors: [],
};
const auth = (state = initialState, action) => {
  const type = getActionType(action);
  const data = getPayloadData(action);
  switch (type) {
    case AUTHENTICATE_FULFILLED:
      console.log(data, 'payload');
      return state;
    case AUTHENTICATE_REJECTED: {
      const errorMessage = getErrorMessage(action);
      return { ...state,
        errors: state.errors.concat({
          errorMessage,
        }) };
    }
    case LOGOUT_FULFILLED:
      return { ...state, token: null, username: null };
    default:
      return state;
  }
};
export default auth;

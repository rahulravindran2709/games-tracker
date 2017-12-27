import { AUTHENTICATE_FULFILLED, LOGOUT_FULFILLED } from 'constants/auth/actions';

const initialState = {
  token: null,
  username: null,
};
const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTHENTICATE_FULFILLED:
      console.log(payload, 'payload');
      return state;
    case LOGOUT_FULFILLED:
      return { ...state, token: null, username: null };
    default:
      return state;
  }
};
export default auth;

import { LOGIN_SUCCESS } from '../actions/types';

const initialState = {
  userDetails: {
    username: null,
  },
};
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return Object.assign(state, { userDetails: {
        username: payload,
      } });
    default:
      return state;
  }
};
export default authReducer;

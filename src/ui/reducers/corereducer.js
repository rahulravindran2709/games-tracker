import { TOGGLE_DRAWER } from '../actions/types';

const initialState = {
  isDrawerOpen: false,
};

const corereducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_DRAWER:
      return { ...state, isDrawerOpen: !state.isDrawerOpen };
    default:
      return state;
  }
};
export default corereducer;

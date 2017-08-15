import { TOGGLE_DRAWER, SEARCH_FULFILLED } from 'actions/types';

const initialState = {
  isDrawerOpen: false,
  search: {
    term: '',
    zone: 'games',
    results: [],
  },
};

const corereducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_DRAWER:
      return { ...state, isDrawerOpen: !state.isDrawerOpen };
    case SEARCH_FULFILLED:
      const { data } = payload;
      return { ...state,
        search: {
          ...state.search,
          results: data,
        } };
    default:
      return state;
  }
};
export default corereducer;

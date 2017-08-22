import { TOGGLE_DRAWER, SEARCH_FULFILLED } from 'actions/types';
import { prop, pathOr } from 'ramda';

const initialState = {
  isDrawerOpen: false,
  search: {
    term: '',
    zone: 'games',
    results: [],
  },
};
const getActionType = prop('type');
const getPayloadData = pathOr({}, ['payload', 'data']);

const corereducer = (state = initialState, action) => {
  const type = getActionType(action);
  const data = getPayloadData(action);
  switch (type) {
    case TOGGLE_DRAWER:
      return { ...state, isDrawerOpen: !state.isDrawerOpen };
    case SEARCH_FULFILLED:
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

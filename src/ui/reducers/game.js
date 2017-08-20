import { GET_GAME_BY_ID_FULFILLED } from 'actions/types';

const initialState = {
  details: {},
};

const game = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_GAME_BY_ID_FULFILLED:
      const { data } = payload;
      return { ...state,
        details: data,
      };
    default:
      return state;
  }
};
export default game;

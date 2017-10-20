import { GET_GAME_BY_ID_FULFILLED } from 'actions/types';

const initialState = {
  details: {
    cover: {
      url: '',
    },
  },
};

const game = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_GAME_BY_ID_FULFILLED: {
      const { data } = payload;
      return { ...state,
        details: data[0],
      };
    }
    default:
      return state;
  }
};
export default game;

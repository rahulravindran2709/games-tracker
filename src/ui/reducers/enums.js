import { GET_GENRES_BY_ID_FULFILLED,
  GET_ESRB_RATING_BY_ID_FULFILLED,
  GET_PEGI_RATING_BY_ID_FULFILLED } from 'constants/enums/actions';

const initialState = {
  genres: [],
  pegi: [],
  esrb: [],
};

const enums = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_GENRES_BY_ID_FULFILLED:
      return { ...state, genres: payload.data };
    case GET_PEGI_RATING_BY_ID_FULFILLED:
      return { ...state, pegi: payload.data };
    case GET_ESRB_RATING_BY_ID_FULFILLED:
      return { ...state, esrb: payload.data };
    default:
      return state;
  }
};

export default enums;

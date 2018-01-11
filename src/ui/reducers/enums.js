import { GET_GENRES_BY_ID_FULFILLED,
  GET_ESRB_RATING_BY_ID_FULFILLED,
  GET_PEGI_RATING_BY_ID_FULFILLED,
  GET_DEVELOPER_BY_ID_FULFILLED,
  GET_PUBLISHER_BY_ID_FULFILLED,
 } from 'constants/enums/actions';
import { getActionType, getPayloadData } from './shared/utils';

const initialState = {
  genres: [],
  pegi: [],
  esrb: [],
  developers: [],
  publishers: [],
};

const enums = (state = initialState, action) => {
  const type = getActionType(action);
  const data = getPayloadData(action);
  switch (type) {
    case GET_GENRES_BY_ID_FULFILLED:
      return { ...state, genres: data };
    case GET_PEGI_RATING_BY_ID_FULFILLED:
      return { ...state, pegi: data };
    case GET_ESRB_RATING_BY_ID_FULFILLED:
      return { ...state, esrb: data };
    case GET_DEVELOPER_BY_ID_FULFILLED:
      return { ...state, developers: data };
    case GET_PUBLISHER_BY_ID_FULFILLED:
      return { ...state, publishers: data };
    default:
      return state;
  }
};

export default enums;

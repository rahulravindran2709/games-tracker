import { CALL_API, GET } from 'middlewares/api';
import { GET_GENRES_BY_ID, GET_PEGI_RATING_BY_ID, GET_ESRB_RATING_BY_ID } from 'constants/enums/actions';
import { GET_GENRES_BY_ID as GET_GENRES_BY_ID_URL, GET_PEGI_BY_ID, GET_ESRB_BY_ID } from 'constants/enums/urls';

export const getGenres = () => dispatch =>
dispatch({
  type: CALL_API,
  payload: {
    auth: true,
    method: GET,
    requestName: GET_GENRES_BY_ID,
    url: `${GET_GENRES_BY_ID_URL}/`,
  },
});


export const getPegiRatings = () => dispatch =>
dispatch({
  type: CALL_API,
  payload: {
    auth: true,
    method: GET,
    requestName: GET_PEGI_RATING_BY_ID,
    url: `${GET_PEGI_BY_ID}/`,
  },
});

export const getEsrbRatings = () => dispatch =>
dispatch({
  type: CALL_API,
  payload: {
    auth: true,
    method: GET,
    requestName: GET_ESRB_RATING_BY_ID,
    url: `${GET_ESRB_BY_ID}/`,
  },
});


export const loadEnumData = () => (dispatch) => {
  // dispatch(getGenres());
  // dispatch(getPegiRatings());
  // dispatch(getEsrbRatings());
  return Promise.all([dispatch(getGenres()),
    dispatch(getPegiRatings()), dispatch(getEsrbRatings())])
  .then(() => {});
};

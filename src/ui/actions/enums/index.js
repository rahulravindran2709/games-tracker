import { getJSONFromServer } from 'utils/xhr';
import { GET_GENRES_BY_ID, GET_PEGI_RATING_BY_ID, GET_ESRB_RATING_BY_ID } from 'constants/enums/actions';
import { GET_GENRES_BY_ID as GET_GENRES_BY_ID_URL, GET_PEGI_BY_ID, GET_ESRB_BY_ID } from 'constants/enums/urls';

export const getGenres = () => dispatch =>
  dispatch({
    type: GET_GENRES_BY_ID,
    payload: {
      promise: getJSONFromServer(`${GET_GENRES_BY_ID_URL}/`),
    },
  });

export const getPegiRatings = () => dispatch =>
    dispatch({
      type: GET_PEGI_RATING_BY_ID,
      payload: {
        promise: getJSONFromServer(`${GET_PEGI_BY_ID}/`),
      },
    });
export const getEsrbRatings = () => dispatch =>
        dispatch({
          type: GET_ESRB_RATING_BY_ID,
          payload: {
            promise: getJSONFromServer(`${GET_ESRB_BY_ID}/`),
          },
        });

export const loadEnumData = () => (dispatch) => {
  dispatch(getGenres());
  dispatch(getPegiRatings());
  dispatch(getEsrbRatings());
};

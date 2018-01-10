import { GET_GAME_BY_ID_FULFILLED } from 'actions/types';

const initialState = {
  details: {
    cover: {
      url: '',
    },
  },
  meta: {
    timesheets: [{ id: 1, date: '27th September, 2017', timeLogged: 3 },
    { id: 2, date: '22nd September, 2017', timeLogged: 2 },
    { id: 3, date: '22nd September, 2017', timeLogged: 2 },
    { id: 4, date: '22nd September, 2017', timeLogged: 1 },
    { id: 5, date: '20th August, 2017', timeLogged: 3 },
    { id: 6, date: '14th August, 2017', timeLogged: 4 },
    { id: 7, date: '10th May, 2017', timeLogged: 2 },
    { id: 8, date: '10th May, 2017', timeLogged: 3 },
    { id: 9, date: '10th April, 2017', timeLogged: 5 },
    { id: 10, date: '10th March, 2017', timeLogged: 3 },
    { id: 11, date: '10th December, 2016', timeLogged: 10 },
    { id: 12, date: '3rd September, 2017', timeLogged: 12 }],
  },
};

const game = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_GAME_BY_ID_FULFILLED: {
      const { data } = payload;
      return { ...state,
        details: data,
      };
    }
    default:
      return state;
  }
};
export default game;

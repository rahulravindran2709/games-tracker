import { GET_GAME_BY_ID_FULFILLED } from 'actions/types';
import { GET_GAME_COLLECTION_BY_USERID_FULFILLED } from 'constants/game/actions';
import { GET_TIMESHEETS_FULFILLED } from 'constants/timesheet/actions';
import { getActionType, getPayloadData } from './shared/utils';

const initialState = {
  details: null,
  collectionDetails: null,
  meta: {
    timesheets: null,
  },
};

const game = (state = initialState, action) => {
  const type = getActionType(action);
  const data = getPayloadData(action);
  switch (type) {
    case GET_GAME_BY_ID_FULFILLED: {
      return { ...state,
        details: data,
      };
    }
    case GET_GAME_COLLECTION_BY_USERID_FULFILLED: {
      const { Collections: [collection = null] } = data;
      return { ...state,
        collectionDetails: collection,
      };
    }
    case GET_TIMESHEETS_FULFILLED: {
      const { Timesheets = null } = data;
      return { ...state,
        meta: { ...state.meta,
          timesheets: Timesheets,
        },
      };
    }
    default:
      return state;
  }
};
export default game;

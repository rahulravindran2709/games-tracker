import { GET_GAME_BY_ID_FULFILLED,
  GET_GAME_COLLECTION_BY_USERID_FULFILLED,
  GET_GAME_SCREENSHOTS_BY_ID_FULFILLED,
  GET_GAME_COVER_BY_ID_FULFILLED,
  GET_GAME_LINKS_BY_ID_FULFILLED,
 } from 'constants/game/actions';
import { GET_TIMESHEETS_FULFILLED } from 'constants/timesheet/actions';
import { getActionType, getPayloadData } from './shared/utils';

const initialState = {
  details: null,
  collectionDetails: null,
  screenshots: null,
  links: null,
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
    case GET_GAME_SCREENSHOTS_BY_ID_FULFILLED: {
      return { ...state,
        screenshots: data,
      };
    }
    case GET_GAME_COVER_BY_ID_FULFILLED: {
      return { ...state,
        cover: data[0],
      };
    }
    case GET_GAME_LINKS_BY_ID_FULFILLED: {
      return { ...state,
        links: data,
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

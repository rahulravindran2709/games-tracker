import { GET_USER_COLLECTIONS, GET_USER_WISHLISTS, GET_USER_AGG_METADATA } from 'constants/collections/actions';
import { GET_USER_COLLECTIONS as GET_USER_COLLECTIONS_URL,
   GET_USER_WISHLISTS as GET_USER_WISHLISTS_URL,
 GET_USER_AGG_METADATA as GET_USER_AGG_METADATA_URL,
ADD_GAME_TO_COLLECTION as ADD_GAME_TO_COLLECTION_URL } from 'constants/collections/urls';
import { CALL_API, GET, PUT } from 'middlewares/api';

export const getUserCollections = userId => dispatch =>
  dispatch({
    type: CALL_API,
    payload: {
      auth: true,
      method: GET,
      requestName: GET_USER_COLLECTIONS,
      url: `${GET_USER_COLLECTIONS_URL(userId)}`,
    },
  });

export const getUserWishlists = userId => dispatch =>
dispatch({
  type: CALL_API,
  payload: {
    auth: true,
    method: GET,
    requestName: GET_USER_WISHLISTS,
    url: `${GET_USER_WISHLISTS_URL(userId)}`,
  },
});


export const getUserAggregrateMetadata = userId => dispatch =>
dispatch({
  type: CALL_API,
  payload: {
    auth: true,
    method: GET,
    requestName: GET_USER_AGG_METADATA,
    url: `${GET_USER_AGG_METADATA_URL(userId)}/`,
  },
});

export const addGameToCollection = (collectionId, gameId) => dispatch =>
dispatch({
  type: CALL_API,
  payload: {
    auth: true,
    method: PUT,
    requestName: `${ADD_GAME_TO_COLLECTION_URL(collectionId, gameId)}`,
  },
});
export const loadUserGameData = () => (dispatch) => {
  dispatch(getUserCollections(1));
  dispatch(getUserWishlists(1));
  // dispatch(getUserAggregrateMetadata(1));
};

import { GET_USER_COLLECTIONS, GET_USER_WISHLISTS, GET_USER_AGG_METADATA,
CREATE_COLLECTION, ADD_GAME_TO_COLLECTION } from 'constants/collections/actions';
import { GET_USER_COLLECTIONS as GET_USER_COLLECTIONS_URL,
   GET_USER_WISHLISTS as GET_USER_WISHLISTS_URL,
 GET_USER_AGG_METADATA as GET_USER_AGG_METADATA_URL,
ADD_GAME_TO_COLLECTION as ADD_GAME_TO_COLLECTION_URL,
CREATE_COLLECTION as CREATE_COLLECTION_URL } from 'constants/collections/urls';
import { CALL_API, GET, PUT, POST } from 'middlewares/api';
import { COLLECTION, WISHLIST } from 'constants/collections';

export const getUserCollections = userId =>
({
  type: CALL_API,
  payload: {
    auth: true,
    method: GET,
    requestName: GET_USER_COLLECTIONS,
    url: `${GET_USER_COLLECTIONS_URL(userId)}`,
  },
});

export const getUserWishlists = userId =>
({
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
export const createNewCollection = (collectionName, userId) => ({
  type: CALL_API,
  payload: {
    auth: true,
    method: POST,
    requestName: `${CREATE_COLLECTION}`,
    url: `${CREATE_COLLECTION_URL(userId)}`,
    body: {
      collectionName,
    },
  },
});
export const addGameToCollection = (collectionId, gameId) => dispatch =>
dispatch({
  type: CALL_API,
  payload: {
    auth: true,
    method: PUT,
    requestName: ADD_GAME_TO_COLLECTION,
    url: `${ADD_GAME_TO_COLLECTION_URL(collectionId, gameId)}`,
  },
});
export const loadUserGameData = userId => (dispatch) => {
  dispatch(getUserCollections(userId));
  dispatch(getUserWishlists(userId));
  // dispatch(getUserAggregrateMetadata(1));
};

export const getUserListBasedOnType = (userId, listType) => (dispatch) => {
  if (listType === COLLECTION) {
    dispatch(getUserCollections(userId));
  } else if (listType === WISHLIST) {
    dispatch(getUserWishlists(userId));
  }
};

export const addNewUserListBasedOnType = (listName, userId, gameId, listType) => (dispatch) => {
  if (listType === COLLECTION) {
    return dispatch(createNewCollection(listName, userId))
    .then(({ value: { data } }) => {
      const { collection_id } = data[0][0];
      console.log(collection_id, 'Collection id received');
      console.log(gameId, 'Game id received');
      return dispatch(addGameToCollection(collection_id, gameId));
    });
    // .then(() =>);
  }
  return null;
};

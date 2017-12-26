import { getJSONFromServer } from 'utils/xhr';
import { GET_USER_COLLECTIONS, GET_USER_WISHLISTS, GET_USER_AGG_METADATA } from 'constants/collections/actions';
import { GET_USER_COLLECTIONS as GET_USER_COLLECTIONS_URL,
   GET_USER_WISHLISTS as GET_USER_WISHLISTS_URL,
 GET_USER_AGG_METADATA as GET_USER_AGG_METADATA_URL } from 'constants/collections/urls';

export const getUserCollections = userId =>
  ({
    type: GET_USER_COLLECTIONS,
    payload: {
      promise: getJSONFromServer(`${GET_USER_COLLECTIONS_URL(userId)}`),
    },
  });

export const getUserWishlists = userId =>
    ({
      type: GET_USER_WISHLISTS,
      payload: {
        promise: getJSONFromServer(`${GET_USER_WISHLISTS_URL(userId)}`),
      },
    });
export const getUserAggregrateMetadata = userId => ({
  type: GET_USER_AGG_METADATA,
  payload: {
    promise: getJSONFromServer(`${GET_USER_AGG_METADATA_URL(userId)}/`),
  },
});
export const loadUserGameData = () => (dispatch) => {
  dispatch(getUserCollections(1));
  dispatch(getUserWishlists(1));
  // dispatch(getUserAggregrateMetadata(1));
};

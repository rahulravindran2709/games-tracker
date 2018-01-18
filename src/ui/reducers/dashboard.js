import { GET_USER_COLLECTIONS_FULFILLED,
  GET_USER_WISHLISTS_FULFILLED,
  GET_USER_AGG_METADATA_FULFILLED,
  CREATE_COLLECTION_FULFILLED,
 } from 'constants/collections/actions';
import { getActionType, getPayloadData } from './shared/utils';


const initialState = {
  metadata: {},
  collections: [],
  wishlists: [],
};


const dashboard = (state = initialState, action) => {
  const type = getActionType(action);
  const data = getPayloadData(action);
  switch (type) {
    case GET_USER_COLLECTIONS_FULFILLED:
      return { ...state, collections: data[0].Collections };
    case GET_USER_WISHLISTS_FULFILLED:
      return { ...state, wishlists: data[0].Wishlists };
    case GET_USER_AGG_METADATA_FULFILLED:
      return { ...state, metadata: data };
    case CREATE_COLLECTION_FULFILLED: {
      const { collection_id } = data[0][0];
      return { ...state, collections: state.collections.concat({ collection_id }) };
    }
    default:
      return state;
  }
};
export default dashboard;

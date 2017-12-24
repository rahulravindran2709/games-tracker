import { createSelector } from 'reselect';
import { map, path, compose } from 'ramda';

const getCollections = compose(map(elem => ({
  id: elem.collection_id,
  name: elem.collection_name,
  url: 'http://via.placeholder.com/350x150',
})), path(['dashboard', 'collections']));
const getWishlists = compose(map(elem => ({
  id: elem.wishlist_id,
  name: elem.wishlist_name,
  url: 'http://via.placeholder.com/350x150',
})), path(['dashboard', 'wishlists']));
const getUserMetadata = path(['dashboard', 'metadata']);
const selector = createSelector(
  [getCollections, getWishlists, getUserMetadata],
  (collections, wishlists, metadata) => ({
    collections,
    wishlists,
    metadata,
  }));

export default selector;

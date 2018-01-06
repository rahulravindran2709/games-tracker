import { createSelector } from 'reselect';
import { path, map, compose } from 'ramda';

const getIsGameDialogOpen = path(['dialogs', 'isAddGameOpen']);
const getGameDialogType = path(['dialogs', 'dialogType']);
const getUserCollections = path(['dashboard', 'collections']);
const getUserWishlists = path(['dashboard', 'wishlists']);
const getMappedCollections = compose(map(elem => ({
  id: elem.collection_id,
  name: elem.collection_name,
})), getUserCollections);
const getMappedWishlists = compose(map(elem => ({
  id: elem.wishlist_id,
  name: elem.wishlist_name,
})), getUserWishlists);


const selector = createSelector(
  [getIsGameDialogOpen, getGameDialogType, getMappedCollections, getMappedWishlists],
  (open, dialogType, collections, wishlists) => ({
    open,
    dialogType,
    collections,
    wishlists,
  }));

export default selector;

import { createSelector } from 'reselect';
import { path, map, compose, ifElse, equals } from 'ramda';

const getIsGameDialogOpen = path(['dialogs', 'addGame', 'isOpen']);
const getGameDialogType = path(['dialogs', 'addGame', 'dialogType']);
const isTypeCollection = equals('Collection');
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
const checkGameDialogTypeIsCollection = compose(isTypeCollection, getGameDialogType);
const getUserListBasedOnDialogType = ifElse(checkGameDialogTypeIsCollection,
  getMappedCollections, getMappedWishlists);
const selector = createSelector(
  [getIsGameDialogOpen, getGameDialogType, getUserListBasedOnDialogType],
  (open, dialogType, userList) => ({
    open,
    dialogType,
    userList,
  }));

export default selector;

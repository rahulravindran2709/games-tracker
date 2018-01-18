import { createSelector } from 'reselect';
import { path, map, compose, ifElse, equals } from 'ramda';
import { COLLECTION, WISHLIST } from 'constants/collections';


const getIsGameDialogOpen = path(['dialogs', 'addGame', 'isOpen']);
const getDialogGameId = path(['dialogs', 'addGame', 'gameDetails', 'id']);
const getGameDialogType = path(['dialogs', 'addGame', 'dialogType']);
const isTypeCollection = equals(COLLECTION);
const isTypeWishlist = equals(WISHLIST);
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
const checkGameDialogTypeIsWishlist = compose(isTypeWishlist, getGameDialogType);
const getUserListBasedOnDialogType = ifElse(checkGameDialogTypeIsCollection,
  getMappedCollections, ifElse(checkGameDialogTypeIsWishlist, getMappedWishlists, () => null));
const getUserId = path(['auth', 'user', 'id']);
const selector = createSelector(
  [getIsGameDialogOpen,
    getGameDialogType, getUserListBasedOnDialogType, getUserId, getDialogGameId],
  (open, dialogType, userList, userId, gameId) => ({
    open,
    dialogType,
    userList,
    userId,
    gameId,
  }));

export default selector;

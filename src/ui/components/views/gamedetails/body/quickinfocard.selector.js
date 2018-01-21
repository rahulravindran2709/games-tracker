import { createSelector } from 'reselect';
import { path } from 'ramda';

const getGameCollectionDetails = path(['gameDetails', 'collectionDetails']);
const getCoverImage = path(['gameDetails', 'cover']);
const getWebsiteLinks = path(['gameDetails', 'links']);
const getGameId = path(['gameDetails', 'details', 'id']);
const selector = createSelector(
  [getGameCollectionDetails, getGameId, getCoverImage, getWebsiteLinks],
  (collectionDetails, gameId, cover, links) => ({
    collectionDetails,
    gameId,
    cover,
    links,
  }));
export default selector;

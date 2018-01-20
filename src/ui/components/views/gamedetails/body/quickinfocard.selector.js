import { createSelector } from 'reselect';
import { path } from 'ramda';

const getGameCollectionDetails = path(['gameDetails', 'collectionDetails']);
const getGameId = path(['gameDetails', 'details', 'id']);
const selector = createSelector(
  [getGameCollectionDetails, getGameId], (collectionDetails, gameId) => ({
    collectionDetails,
    gameId,
  }));
export default selector;

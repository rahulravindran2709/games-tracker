import { createSelector } from 'reselect';
import { path } from 'ramda';

const getGameMetaData = path(['gameDetails', 'meta', 'stats']);
const getGameId = path(['gameDetails', 'details', 'id']);
const selector = createSelector(
  [getGameMetaData, getGameId], (metadata, gameId) => ({
    metadata,
    gameId,
  }));
export default selector;

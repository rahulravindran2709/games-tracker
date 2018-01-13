import { createSelector } from 'reselect';
import { complement, isEmpty, path, compose } from 'ramda';

const getGameCollectionDetails = path(['gameDetails', 'collectionDetails']);
const isNotEmpty = complement(isEmpty);
const isGamePartOfCollection = compose(isNotEmpty, getGameCollectionDetails);
const selector = createSelector(
  [isGamePartOfCollection],
  isGameInCollection => ({
    isGameInCollection,
  }));

export default selector;

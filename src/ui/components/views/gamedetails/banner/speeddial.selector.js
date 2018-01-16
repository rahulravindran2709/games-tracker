import { createSelector } from 'reselect';
import { complement, isNil, path, compose, pick, when } from 'ramda';

const isNotNil = complement(isNil);
const getGameCollectionDetails = path(['gameDetails', 'collectionDetails']);
const getGameDetails = path(['gameDetails', 'details']);
const getGameIdAndName = pick(['id', 'name']);
const getGameObject = compose(getGameIdAndName, getGameDetails);
const getGameObjectIfPresent = when(compose(isNotNil, getGameDetails), getGameObject);
const isGamePartOfCollection = compose(isNotNil, getGameCollectionDetails);
const selector = createSelector(
  [isGamePartOfCollection, getGameObjectIfPresent, getGameCollectionDetails],
  (isGameInCollection, gameObject, collection) => ({
    isGameInCollection,
    gameObject,
    collection,
  }));

export default selector;

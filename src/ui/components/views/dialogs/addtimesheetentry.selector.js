import { createSelector } from 'reselect';
import { path } from 'ramda';

const getIsTimesheetDialogOpen = path(['dialogs', 'addTimesheet', 'isOpen']);
const getDialogGameId = path(['dialogs', 'addTimesheet', 'gameDetails']);
const getDialogCollectionId = path(['dialogs', 'addTimesheet', 'collectionDetails']);
const selector = createSelector(
  [getIsTimesheetDialogOpen, getDialogGameId, getDialogCollectionId],
  (open, game, collection) => ({
    open,
    game,
    collection,
  }));

export default selector;

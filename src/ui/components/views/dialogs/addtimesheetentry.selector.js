import { createSelector } from 'reselect';
import { path } from 'ramda';

const getIsTimesheetDialogOpen = path(['dialogs', 'addTimesheet', 'isOpen']);
const getDialogGameId = path(['dialogs', 'addTimesheet', 'gameId']);
const getDialogCollectionId = path(['dialogs', 'addTimesheet', 'collectionId']);
const selector = createSelector(
  [getIsTimesheetDialogOpen, getDialogGameId, getDialogCollectionId],
  (open, gameId, collectionId) => ({
    open,
    gameId,
    collectionId,
  }));

export default selector;

import { createSelector } from 'reselect';
import { path } from 'ramda';

const getIsGameDialogOpen = path(['dialogs', 'isAddGameOpen']);
const getGameDialogType = path(['dialogs', 'dialogType']);
const selector = createSelector(
  [getIsGameDialogOpen, getGameDialogType],
  (open, dialogType) => ({
    open,
    dialogType,
  }));

export default selector;

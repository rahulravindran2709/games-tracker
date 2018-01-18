import { OPEN_ADD_GAME_DIALOG, CLOSE_ADD_GAME_DIALOG,
 OPEN_ADD_TIMESHEET_DIALOG, CLOSE_ADD_TIMESHEET_DIALOG } from 'constants/dialogs/actions';
import { COLLECTION, WISHLIST } from 'constants/collections/'

export const openAddGameToCollectionDialog = () => ({
  type: OPEN_ADD_GAME_DIALOG,
  payload: {
    dialogType: COLLECTION,
  },
});

export const openAddGameToWishlistDialog = () => ({
  type: OPEN_ADD_GAME_DIALOG,
  payload: {
    dialogType: WISHLIST,
  },
});

export const closeAddGameDialog = () => ({
  type: CLOSE_ADD_GAME_DIALOG,
});

export const openAddTimesheetEntryDialog = (game, collection) => ({
  type: OPEN_ADD_TIMESHEET_DIALOG,
  payload: {
    gameDetails: game,
    collectionDetails: collection,
  },
});

export const closeAddTimesheetEntryDialog = () => ({
  type: CLOSE_ADD_TIMESHEET_DIALOG,
});

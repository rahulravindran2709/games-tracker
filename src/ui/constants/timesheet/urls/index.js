export const ADD_TIMESHEET_ENTRY = (collectionId, gameId) => `/collections/${collectionId}/games/${gameId}/time`;
export const UPDATE_TIMESHEET_ENTRY = (collectionId, gameId, entryId) => `/collections/${collectionId}/games/${gameId}/time/${entryId}`;
export const GET_TIMESHEETS = (collectionId, gameId) => `/collections/${collectionId}/games/${gameId}/time`;

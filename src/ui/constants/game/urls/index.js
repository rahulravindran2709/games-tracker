export const GET_GAME_COLLECTION_BY_USERID = (userId, gameId) => `/users/${userId}/games/${gameId}`;
export const GET_GAME_BY_ID = gameId => `/games/${gameId}`;
export const GET_GAME_LINKS_BY_ID = gameId => `/games/${gameId}/links`;
export const GET_GAME_IMAGES_BY_ID = gameId => `/games/${gameId}/images`;
export const GET_GAME_METADATA_BY_ID = (collectionId, gameId) => `/collections/${collectionId}/games/${gameId}`;

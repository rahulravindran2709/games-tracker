export const GET_USER_COLLECTIONS = userId => `/users/${userId}/collections`;
export const GET_USER_WISHLISTS = userId => `/users/${userId}/wishlists`;
export const GET_USER_AGG_METADATA = userId => `users/${userId}/meta`;
export const ADD_GAME_TO_COLLECTION = (collectionId, gameId) => `/collections/${collectionId}/games/${gameId}`;

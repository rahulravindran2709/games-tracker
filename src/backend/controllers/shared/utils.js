import { path } from 'ramda';

export const getServerMethod = methodName => path(['server', 'methods', methodName]);
export const getRequestParam = paramName => path(['params', paramName]);
export const getIdRequestParam = getRequestParam('id');
export const getGameIdRequestParam = getRequestParam('gameid');
export const getCollectionIdRequestParam = getRequestParam('collectionid');
export const getWishlistIdRequestParam = getRequestParam('wishlistid');
export const getUserIdRequestParam = getRequestParam('userid');
export const getPostBody = path(['payload']);
export const getAuthCredentials = path(['auth', 'credentials']);

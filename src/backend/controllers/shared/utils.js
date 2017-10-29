import { path } from 'ramda';

export const getServerMethod = methodName => path(['server', 'methods', methodName]);
export const getRequestParam = paramName => path(['params', paramName]);
export const getIdRequestParam = getRequestParam('id');
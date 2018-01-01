import { getJsonFromServerWithAuth, postJsonToServerWithAuth } from 'utils/xhr';
import { path } from 'ramda';

export const getProtectedResource = (type, url, state) => {
  const token = path(['auth', 'token'])(state);
  return {
    type,
    payload: {
      promise: getJsonFromServerWithAuth(token)(url),
    },
  };
};

export const postProtectedResource = (type, url, body, state) => {
  const token = path(['auth', 'token'])(state);
  return {
    type,
    payload: {
      promise: postJsonToServerWithAuth(token)(url, body),
    },
  };
};

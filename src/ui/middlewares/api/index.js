import { getJSONFromServer, postJSONToServer } from 'utils/xhr';
import { path, objOf, compose, merge } from 'ramda';
/* Attempt at implementing api middleware using RSAA specification */
export const CALL_API = Symbol('CALL_API');
export const GET = Symbol('GET');
export const POST = Symbol('POST');
const getPromiseMethod = ({ method, url, params, token, body }) => {
  switch (method) {
    case GET:
      return getJSONFromServer(url, params, token);
    case POST:
      return postJSONToServer(url, body, token);
    default:
      return getJSONFromServer(url, params, token);
  }
};
export const callApi = store => next => (action) => {
  if (action.type !== CALL_API) {
    return next(action);
  }
  const { auth, requestName } = action.payload;
  const token = auth ? path(['auth', 'token'])(store.getState()) : null;
  const actionType = objOf('type', requestName);
  const payloadObject = objOf('payload');
  const promiseObject = objOf('promise');
  const actionToForward = compose(merge(actionType), payloadObject,
   promiseObject, getPromiseMethod)({ ...action.payload, token });
  return next(actionToForward);
};

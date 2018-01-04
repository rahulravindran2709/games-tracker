import { REJECTED } from 'redux-promise-middleware';
import { pathOr } from 'ramda';
import { addMessageToSnackbarQueue } from 'actions';

const getErrorObject = pathOr({}, ['payload', 'response', 'data']);

const promiseError = ({ dispatch }) => next => (action) => {
  if (!action.type.endsWith(REJECTED)) {
    return next(action);
  }
  const errorObject = getErrorObject(action);
  const message = `${errorObject.error}: ${errorObject.message}`;
  console.log(message, 'In error middleware');
  dispatch(addMessageToSnackbarQueue(message));
  return next(action);
};

export default promiseError;

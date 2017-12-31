import { STORAGE_NAME } from 'constants/auth';
import { compose, prop } from 'ramda';

export const getAuthToken = () => {
  const authObject = localStorage.getItem(STORAGE_NAME);
  if (!authObject) {
    return null;
  }
  return compose(prop('token'), JSON.parse)(authObject);
};

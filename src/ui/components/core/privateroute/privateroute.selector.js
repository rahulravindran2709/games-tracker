import { createSelector } from 'reselect';
import { complement, path, compose, isNil } from 'ramda';

const getAuthToken = path(['auth', 'token']);
const isAuthenticated = compose(complement(isNil), getAuthToken);
const selector = createSelector(
  [isAuthenticated],
  isAuth => ({
    isAuth,
  }));

export default selector;

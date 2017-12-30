import { createSelector } from 'reselect';
import { complement, path, compose, isNil } from 'ramda';

const getAuthToken = path(['auth', 'token']);
const isAuthenticated = compose(complement(isNil), getAuthToken);
const selector = createSelector(
  [isAuthenticated],
  isAuth => {
    console.log(isAuth, 'Value of isAuth');
    return {
      isAuth,
    }
  });

export default selector;

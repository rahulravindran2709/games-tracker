import { constructMethodOptions } from '../shared/utils';

const serverMethodOptions = {
  callback: false,
  cache: {
    cache: 'diskCache',
    expiresIn: 30 * 1000,
    generateTimeout: 10000,
  },
  bind: {},
};

const constructMethodOptionsWithDefault = constructMethodOptions(serverMethodOptions);

export const constructGameWishlistMethodOptions = ({ Game, Wishlist }) =>
  constructMethodOptionsWithDefault({ Game, Wishlist });

export const constructGameCollectionMethodOptions = ({ Game, Collection }) =>
  constructMethodOptionsWithDefault({ Game, Collection });

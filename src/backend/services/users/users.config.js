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
export const constructUserCollectionMethodOptions = ({ User, Collection }) =>
  constructMethodOptionsWithDefault({ User, Collection });

export const constructUserMethodOptions = ({ User }) =>
  constructMethodOptionsWithDefault({ User });

export const constructUserWishlistMethodOptions = ({ User, Wishlist }) =>
  constructMethodOptionsWithDefault({ User, Wishlist });

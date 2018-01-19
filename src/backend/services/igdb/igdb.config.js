import { constructMethodOptions } from '../shared/utils';

const serverMethodOptions = {
  callback: false,
  cache: {
    cache: 'diskCache',
    expiresIn: 30 * 1000,
    generateTimeout: 10000,
  },
};

const constructMethodOptionsWithDefault = constructMethodOptions(serverMethodOptions);

export const constructGetGameOptions = ({ Game, Game_Links, Game_Images }) =>
  constructMethodOptionsWithDefault({ Game, Game_Links, Game_Images });

export const constructGetGameImageOptions = ({ Game_Images }) =>
  constructMethodOptionsWithDefault({ Game_Images });

export const constructGetGameLinkOptions = ({ Game_Links }) =>
  constructMethodOptionsWithDefault({ Game_Links });

export const constructSearchOptions = () => ({
  ...serverMethodOptions,
  generateKey: params => (`${params.term || ''}${params.zone || ''}`),
});

export const GET_GENRES_BY_ID = '/genre';
export const GET_PEGI_BY_ID = '/pegi';
export const GET_ESRB_BY_ID = '/esrb';
const WIKIMEDIA_DOMAIN = 'https://upload.wikimedia.org/wikipedia/commons/thumb/';
export const PEGI_ICONS = {
  16: {
    url: `${WIKIMEDIA_DOMAIN}8/8a/PEGI_16.svg/16px-PEGI_16.svg.png`,
    altText: 'PEGI 16',
  },
  18: {
    url: `${WIKIMEDIA_DOMAIN}7/75/PEGI_18.svg/16px-PEGI_18.svg.png`,
    altText: 'PEGI 18',
  },
  12: {
    url: `${WIKIMEDIA_DOMAIN}4/44/PEGI_12.svg/16px-PEGI_12.svg.png`,
    altText: 'PEGI 12',
  },
  7: {
    url: `${WIKIMEDIA_DOMAIN}2/29/PEGI_7.svg/16px-PEGI_7.svg.png`,
    altText: 'PEGI 7',
  },
  3: {
    url: `${WIKIMEDIA_DOMAIN}2/2c/PEGI_3.svg/16px-PEGI_3.svg.png`,
    altText: 'PEGI 3',
  },
};

export const ESRB_ICONS = {
  RP: {
    url: `${WIKIMEDIA_DOMAIN}4/45/ESRB_2013_Rating_Pending.svg/16px-ESRB_2013_Rating_Pending.svg.png`,
    altText: 'ESRB 2013 Rating Pending',
  },
  EC: {
    url: `${WIKIMEDIA_DOMAIN}0/05/ESRB_2013_Early_Childhood.svg/16px-ESRB_2013_Early_Childhood.svg.png`,
    altText: 'ESRB 2013 Early Childhood',
  },
  E: {
    url: `${WIKIMEDIA_DOMAIN}e/e0/ESRB_2013_Everyone.svg/16px-ESRB_2013_Everyone.svg.png`,
    altText: 'ESRB 2013 Everyone',
  },
  'E10+': {
    url: `${WIKIMEDIA_DOMAIN}e/ea/ESRB_-_K-Av2.svg/16px-ESRB_-_K-Av2.svg.png`,
    altText: 'ESRB - K-Av2',
  },
  T: {
    url: `${WIKIMEDIA_DOMAIN}8/8f/ESRB_2013_Teen.svg/16px-ESRB_2013_Teen.svg.png`,
    altText: 'ESRB 2013 Teen',
  },
  M: {
    url: `${WIKIMEDIA_DOMAIN}c/cb/ESRB_2013_Mature.svg/16px-ESRB_2013_Mature.svg.png`,
    altText: 'ESRB 2013 Mature',
  },
  AO: {
    url: `${WIKIMEDIA_DOMAIN}8/8d/ESRB_2013_Adults_Only.svg/16px-ESRB_2013_Adults_Only.svg.png`,
    altText: 'ESRB 2013 Adults Only',
  },
};

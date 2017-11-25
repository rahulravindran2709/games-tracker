import { getUserById, getUserCollections, getUserWishLists, getGamesInCollection, getGamesInWishlist } from '../controllers/api/user';

const routes = [
  {
    method: 'GET',
    path: '/users/{id?}',
    handler: getUserById,
    config: {
      description: 'Get the user profile information',
      notes: 'Get basic user details',
      tags: ['api', 'user', 'profile'],
    },
  },
  {
    method: 'GET',
    path: '/users/{id}/collections',
    handler: getUserCollections,
    config: {
      description: 'Get all collections associated to a user',
      notes: 'Get active collections',
      tags: ['api', 'user', 'collections'],
    },

  },
  {
    method: 'GET',
    path: '/collections/{id}/games',
    handler: getGamesInCollection,
    config: {
      description: 'Get all games associated to a collection',
      notes: 'Get games in collection',
      tags: ['api', 'user', 'collections', 'games'],
    },

  },
  {
    method: 'GET',
    path: '/wishlists/{id}/games',
    handler: getGamesInWishlist,
    config: {
      description: 'Get all games associated to a wishlist',
      notes: 'Get games in wishlist',
      tags: ['api', 'user', 'wishlists', 'games'],
    },

  },
  {
    method: 'GET',
    path: '/users/{id}/wishlists',
    handler: getUserWishLists,
    config: {
      description: 'Get all wishlists associated to a user',
      notes: 'Get active wishlists',
      tags: ['api', 'user', 'wishlists'],
    },

  },
];

export default routes;

import { getUserById, getUserCollections, getUserWishLists } from '../controllers/api/user';

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

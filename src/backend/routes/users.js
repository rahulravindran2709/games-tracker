import { getUserById, getUserCollections, getUserWishLists, createUser } from '../controllers/api/user';
import { userPost } from '../validation/schemas/user';

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
  {
    method: 'POST',
    path: '/users/',
    handler: createUser,
    config: {
      validate: {
        payload: userPost,
      },
      description: 'Add a new user',
      notes: 'Add a new user to database',
      tags: ['api', 'user'],
    },

  },
];

export default routes;

import { getUserById, getUserCollections, getUserWishLists,
  createUser, updateUser, createUserCollection } from '../controllers/api/user';
import { userPost, userPut } from '../validation/schemas/user';
import { collectionPost } from '../validation/schemas/collection';

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
    method: 'POST',
    path: '/users/{id}/collections',
    handler: createUserCollection,
    config: {
      validate: {
        payload: collectionPost,
      },
      description: 'Create a new collection associated to a user',
      notes: 'Create new active collections',
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
  {
    method: 'PUT',
    path: '/users/{id}',
    handler: updateUser,
    config: {
      validate: {
        payload: userPut,
      },
      description: 'Updates the details of an existing user',
      notes: 'Updates existing user in database',
      tags: ['api', 'user'],
    },

  },
];

export default routes;

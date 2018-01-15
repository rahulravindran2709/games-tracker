import { getUserById, getUserCollections, getUserWishLists,
  createUser, updateUser, createUserCollection,
  authenticateUser,
createUserWishlist,
getGameCollectionByUser,
logout } from '../controllers/api/user';
import { userPost, userAuthPost, userPut } from '../validation/schemas/user';
import { collectionPost } from '../validation/schemas/collection';
import { wishlistPost } from '../validation/schemas/wishlist';

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

  }, {
    method: 'POST',
    path: '/users/{id}/wishlists',
    handler: createUserWishlist,
    config: {
      validate: {
        payload: wishlistPost,
      },
      description: 'Create a new wishlist associated to a user',
      notes: 'Create new active collections',
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
      auth: false,
      description: 'Add a new user',
      notes: 'Add a new user to database',
      tags: ['api', 'user'],
    },

  },
  {
    method: 'POST',
    path: '/authenticate',
    handler: authenticateUser,
    config: {
      validate: {
        payload: userAuthPost,
      },
      auth: false,
      description: 'Authenticates credentials of a user',
      notes: 'Checks login credentials of a user',
      tags: ['api', 'user', 'login'],
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
  {
    method: ['GET', 'POST'],
    path: '/logout',
    handler: logout,
    config: {
      description: 'Logs out the user',
      notes: 'Logout',
      tags: ['api', 'user', 'login'],
    },
  },
  {
    method: 'GET',
    path: '/users/{userid}/games/{gameid}',
    handler: getGameCollectionByUser,
    config: {
      auth: false,
      description: 'Get associated collection for a game',
      notes: 'Create new active collections',
      tags: ['api', 'user', 'games'],
    },

  },
];

export default routes;

import { getTimesheetsByGameEntry, addTimesheet } from '../controllers/api/timesheet';
import { getGamesInCollection, getGamesInWishlist,
   getGameMetaDataByCollection, addGameToCollection,
   addGameToWishlist,
 removeGamesInCollection,
 removeGamesInWishlist } from '../controllers/api/collection';
import { gameCollectionPost } from '../validation/schemas/gamecollection';
import { timesheetPost } from '../validation/schemas/timesheet';

const routes = [{
  method: 'GET',
  path: '/collections/{id}/games/{gameid}/time',
  handler: getTimesheetsByGameEntry,
  config: {
    description: 'Get all recorded timesheets for a game',
    notes: 'Get timesheets for a specific game played by user',
    tags: ['api', 'user', 'collections', 'games', 'timesheets'],
  },

}, {
  method: 'POST',
  path: '/collections/{collectionid}/games/{gameid}/time',
  handler: addTimesheet,
  config: {
    auth: false,
    validate: {
      payload: timesheetPost,
    },
    description: 'Create a new timesheet entry for a game',
    notes: 'Dates need to b',
    tags: ['api', 'user', 'collections', 'games', 'timesheets'],
  },

}, {
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
  path: '/collections/{collectionid}/games/{gameid}',
  handler: getGameMetaDataByCollection,
  config: {
    description: 'Get metadata for a specific game in a collection',
    notes: 'Get games in collection',
    tags: ['api', 'user', 'collections', 'games'],
  },

},
{
  method: 'PUT',
  path: '/collections/{collectionid}/games/{gameid}',
  handler: addGameToCollection,
  config: {
    validate: {
      payload: gameCollectionPost,
    },
    description: 'Add a game to a collection',
    notes: 'Add games to collection',
    tags: ['api', 'user', 'collections', 'games'],
  },

},
{
  method: 'PUT',
  path: '/wishlists/{wishlistid}/games/{gameid}',
  handler: addGameToWishlist,
  config: {
    description: 'Add a game to a wishlist',
    notes: 'Add games to wishlist',
    tags: ['api', 'user', 'wishlists', 'games'],
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

}, {
  method: 'DELETE',
  path: '/collections/{collectionid}/games/{gameid}',
  handler: removeGamesInCollection,
  config: {
    description: 'Remove games associated to a collection',
    notes: 'Remove games in collection',
    tags: ['api', 'user', 'collections', 'games'],
  },

}, {
  method: 'DELETE',
  path: '/wishlists/{wishlistid}/games/{gameid}',
  handler: removeGamesInWishlist,
  config: {
    description: 'Remove games associated to a wishlist',
    notes: 'Remove games in wishlist',
    tags: ['api', 'user', 'wishlists', 'games'],
  },

}];

export default routes;

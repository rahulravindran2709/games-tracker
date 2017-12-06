import { getTimesheetsByGameEntry } from '../controllers/api/timesheet';
import { getGamesInCollection, getGamesInWishlist, getGameMetaDataByCollection } from '../controllers/api/collection';

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
  method: 'GET',
  path: '/wishlists/{id}/games',
  handler: getGamesInWishlist,
  config: {
    description: 'Get all games associated to a wishlist',
    notes: 'Get games in wishlist',
    tags: ['api', 'user', 'wishlists', 'games'],
  },

}];

export default routes;

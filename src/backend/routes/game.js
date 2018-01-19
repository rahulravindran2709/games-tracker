import { getGameById, getGameImagesByGameId, getGameLinksByGameId } from '../controllers/api/game';
import { gameImageQuery } from '../validation/schemas/game';

const routes = [{
  method: 'GET',
  path: '/games/{id}',
  handler: getGameById,
  config: {
    auth: false,
    description: 'Get a particular game by its id',
    notes: 'Get game by id',
    tags: ['api', 'game'],
  },
}, {
  method: 'GET',
  path: '/games/{gameid}/images',
  handler: getGameImagesByGameId,
  config: {
    auth: false,
    validate: {
      query: gameImageQuery,
    },
    description: 'Get images related to a game',
    notes: 'Type param can be Screenshot or Cover',
    tags: ['api', 'game', 'images'],
  },
}, {
  method: 'GET',
  path: '/games/{gameid}/links',
  handler: getGameLinksByGameId,
  config: {
    auth: false,
    description: 'Get urls related to a game',
    notes: 'Nothing',
    tags: ['api', 'game', 'links'],
  },
}];

export default routes;

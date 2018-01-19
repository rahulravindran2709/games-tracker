import { getGameById, getGameImagesByGameId } from '../controllers/api/game';
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
    description: 'Get a particular game by its id',
    notes: 'Get game by id',
    tags: ['api', 'game'],
  },
}];

export default routes;

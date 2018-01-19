import { getGameById } from '../controllers/api/game';

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
}];

export default routes;

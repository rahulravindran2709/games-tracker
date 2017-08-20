import GameController from '../controllers/api';

const routes = [
  {
    method: 'GET',
    path: '/search',
    handler: GameController.getGames,
    config: {
      description: 'Search for given term in the IGDB',
      notes: 'Just get all the games',
      tags: ['api', 'game'],
    },
  },
  {
    method: 'GET',
    path: '/games/{id}',
    handler: GameController.getGameById,
    config: {
      description: 'Get a particular game by its id',
      notes: 'Get game by id',
      tags: ['api', 'game'],
    },
  },
];

export default routes;

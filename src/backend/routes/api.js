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
      cache: {
          expiresIn: 30 * 1000,
          privacy: 'private'
      },
    },
  },

  {
    method: 'GET',
    path: '/gamesgenre/{id}',
    handler: GameController.getGameGenreById,
    config: {
      description: 'Get a particular game by its id',
      notes: 'Get game by id',
      tags: ['api', 'game'],
    },

  },
];

export default routes;

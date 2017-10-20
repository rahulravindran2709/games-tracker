import EnumeratedController from '../controllers/api/enumerated';

const routes = [
  {
    method: 'GET',
    path: '/genre/{id}',
    handler: EnumeratedController.getGenreById,
    config: {
      description: 'Get the genre details by Id',
      notes: 'Get',
      tags: ['api', 'enumerated', 'genre'],
    },
  },
  {
    method: 'GET',
    path: '/pegi/{id}',
    handler: EnumeratedController.getPegiRatingById,
    config: {
      description: 'Get the pegi rating details by its id',
      notes: 'Get pegi rating',
      tags: ['api', 'enumerated', 'pegi'],
    },

  },
  {
    method: 'GET',
    path: '/esrb/{id}',
    handler: EnumeratedController.getEsrbRatingById,
    config: {
      description: 'Get the esrb rating details by its id',
      notes: 'Get esrb rating',
      tags: ['api', 'enumerated', 'esrb'],
    },

  },
];

export default routes;

import { getGenreById, getPegiRatingById, getEsrbRatingById, getCompaniesById } from '../controllers/api/enumerated';
import { companyParamGet } from '../validation/schemas/enums';

const routes = [
  {
    method: 'GET',
    path: '/genre/{id?}',
    handler: getGenreById,
    config: {
      description: 'Get the genre details by Id',
      notes: 'Get',
      tags: ['api', 'enumerated', 'genre'],
    },
  },
  {
    method: 'GET',
    path: '/pegi/{id?}',
    handler: getPegiRatingById,
    config: {
      description: 'Get the pegi rating details by its id',
      notes: 'Get pegi rating',
      tags: ['api', 'enumerated', 'pegi'],
    },

  },
  {
    method: 'GET',
    path: '/esrb/{id?}',
    handler: getEsrbRatingById,
    config: {
      description: 'Get the esrb rating details by its id',
      notes: 'Get esrb rating',
      tags: ['api', 'enumerated', 'esrb'],
    },

  },
  {
    method: 'GET',
    path: '/companies',
    handler: getCompaniesById,
    config: {
      auth: false,
      validate:
      {
        query: companyParamGet,
      },
      description: 'Get the company details by ids',
      notes: 'Comma separated ids are allowed',
      tags: ['api', 'enumerated', 'companies'],
    },

  },
];

export default routes;

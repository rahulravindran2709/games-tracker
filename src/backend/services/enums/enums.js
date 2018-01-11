/* NOTE Do not use arrow functions here as
they cannot be bound to different context while creating them as server methods */
import { getWhereSelectorIfParamNotEmpty, pickFieldsFromArrayResponse } from '../shared/utils';

export function getGenreById(id) {
  console.log(id, 'this inside getgenrebyid');
  const whereSelector = getWhereSelectorIfParamNotEmpty('genre_id')(id);
  return this.model.findAll(whereSelector)
  .then(pickFieldsFromArrayResponse(['name', 'genre_id']));
}
export function getPegiRatingById(id) {
  console.log(id, 'this inside getpegiratingbyid');
  const whereSelector = getWhereSelectorIfParamNotEmpty('pegi_rating_id')(id);
  return this.model.findAll(whereSelector)
  .then(pickFieldsFromArrayResponse(['rating', 'pegi_rating_id']));
}
export function getEsrbRatingById(id) {
  console.log(id, 'this inside getesrbratingbyid');
  const whereSelector = getWhereSelectorIfParamNotEmpty('esrb_rating_id')(id);
  return this.model.findAll(whereSelector)
  .then(pickFieldsFromArrayResponse(['rating', 'esrb_rating_id']));
}

export function getCompaniesById(developers, publishers) {
  console.log(developers, publishers, 'Inside companies');
  return new Promise(resolve => resolve({ developers: [{
    id: 1,
    name: 'Electronic Arts',
  }],
    publishers: [{
      id: 1,
      name: 'Ubisoft',
    }] }));
}

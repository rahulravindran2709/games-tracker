/* NOTE Do not use arrow functions here as
they cannot be bound to different context while creating them as server methods */
import { pick, compose, identity, complement, objOf, assoc, ifElse, isEmpty, map } from 'ramda';

const transformToEmptyObject = () => identity({});
const getWhereAttr = field => value =>
compose(objOf('where'), assoc(field, value), objOf(field))(field);
const getWhereSelectorIfParamNotEmpty = fieldName => ifElse(
  complement(isEmpty),
  getWhereAttr(fieldName),
  transformToEmptyObject,
);
const pickFieldsFromArrayResponse = fields => output => map(pick(fields))(output);
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

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
export function getUserById(id) {
  console.log(id, 'this inside getUserById');
  const whereSelector = getWhereSelectorIfParamNotEmpty('id')(id);
  return this.model.findAll(whereSelector);
}

export function getUserCollections(id) {

}

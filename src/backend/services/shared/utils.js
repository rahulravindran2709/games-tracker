import { pick, compose, identity, complement, objOf, assoc, ifElse, isEmpty, map, propOr } from 'ramda';

const transformToEmptyObject = () => identity({});
const getWhereAttr = field => value =>
compose(objOf('where'), assoc(field, value), objOf(field))(field);
export const getWhereSelectorIfParamNotEmpty = fieldName => ifElse(
  complement(isEmpty),
  getWhereAttr(fieldName),
  transformToEmptyObject,
);
export const pickFieldsFromArrayResponse = fields => output => map(pick(fields))(output);

export const getBodyFromServiceResponse = propOr([], 'body');

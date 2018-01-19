import { reduce, pick, compose, identity, complement, merge,
  objOf, assoc, ifElse, isEmpty, map, propOr, path, head } from 'ramda';

const FK_ERROR_TYPE = 'SequelizeForeignKeyConstraintError';
const UNIQ_ERROR_TYPE = 'SequelizeUniqueConstraintError';
const VALIDATION_TYPE = 'SequelizeValidationError';
const AGGREGRATE = 'AggregateError';

const transformToEmptyObject = () => identity({});
const getWhereAttr = field => value =>
compose(objOf('where'), assoc(field, value), objOf(field))(field);
export const isNotEmpty = complement(isEmpty);
export const getWhereSelectorIfParamNotEmpty = fieldName => ifElse(
  complement(isEmpty),
  getWhereAttr(fieldName),
  transformToEmptyObject,
);
export const pickFieldsFromArrayResponse = fields => output => map(pick(fields))(output);

export const getBodyFromServiceResponse = propOr([], 'body');
export const getDatabaseModels = path(['plugins', 'datastore', 'DatabaseModels']);
const processFKeyConstraintMessage = error => `${error.table}: ${error.parent.detail}`;

const processUniqKeyConstraintMessage = compose(reduce((accum, currentError) => {
  const currentErrMsg = `${currentError.type}: ${currentError.message}; `;
  return accum.concat(currentErrMsg);
}, ''), propOr([], 'errors'));

const processValidationMessage = propOr([], 'errors');
const processAggregrateError = compose(propOr([], 'errors'), head);
const errorProcessorMap = {
  [FK_ERROR_TYPE]: processFKeyConstraintMessage,
  [UNIQ_ERROR_TYPE]: processUniqKeyConstraintMessage,
  [VALIDATION_TYPE]: processValidationMessage,
  [AGGREGRATE]: processAggregrateError,
};

export const getDBErrorMessage = (error) => {
  // [ 'name', 'errors', 'fields', 'parent', 'original', 'sql' ]
  // errors iterate and combine messages plus type
  // fields { collectionId: 2, gameId: 2}
  // parent use detail.code if exists
  // TODO sql write the failed sql to dbError.log
  const { name, sql, parent } = error;
  console.log(error, 'Error');
  const sqlErrorLog = `${name}:${parent && parent.code}:${sql}`;
  console.log(sqlErrorLog);
  return ((errorProcessorMap[name]) && (errorProcessorMap[name])(error)) || error;
};

const addModelToOptions = objOf('models');
const constructBindOptions = objOf('bind');
export const constructMethodOptions = options =>
compose(merge(options), constructBindOptions, addModelToOptions);
const categoryMap = {
  3: 'Wikipedia',
  13: 'Steam',
  2: 'Wikia',
  1: 'Website',
};
export const getTypeFromCategoryCode = code => categoryMap[code] || categoryMap[1];

import { reduce, pick, compose, identity, complement, objOf, assoc, ifElse, isEmpty, map, propOr, path } from 'ramda';

const FK_ERROR_TYPE = 'SequelizeForeignKeyConstraintError';
const UNIQ_ERROR_TYPE = 'SequelizeUniqueConstraintError';

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

const errorProcessorMap = {
  [FK_ERROR_TYPE]: processFKeyConstraintMessage,
  [UNIQ_ERROR_TYPE]: processUniqKeyConstraintMessage,
};

export const getDBErrorMessage = (error) => {
  // [ 'name', 'errors', 'fields', 'parent', 'original', 'sql' ]
  // errors iterate and combine messages plus type
  // fields { collectionId: 2, gameId: 2}
  // parent use detail.code if exists
  // TODO sql write the failed sql to dbError.log
  const { name, sql, parent } = error;
  console.log(error, 'Error')
  const sqlErrorLog = `${name}:${parent.code}:${sql}`;
  console.log(sqlErrorLog);
  return (errorProcessorMap[name])(error);
};

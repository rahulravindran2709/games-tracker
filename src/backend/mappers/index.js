import { propOr, map, compose, fromPairs, toPairs } from 'ramda';
import userMap from './user';
import collectionMap from './collection';
import wishlistMap from './wishlist';
import timesheetMap from './timesheet';

const createMappedFieldArray = mapperObject => fieldArr =>
  [propOr(fieldArr[0], fieldArr[0], mapperObject), fieldArr[1]];
const mapApiObjectToModel = mapperObject => inputObject =>
  compose(fromPairs, map(createMappedFieldArray(mapperObject)), toPairs)(inputObject);
export const mapUserApiObjectToModel = mapApiObjectToModel(userMap);
export const mapCollectionApiObjectToModel = mapApiObjectToModel(collectionMap);
export const mapWishlistApiObjectToModel = mapApiObjectToModel(wishlistMap);
export const mapTimesheetApiObjectToModel = mapApiObjectToModel(timesheetMap);

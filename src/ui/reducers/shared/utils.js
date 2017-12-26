import { prop, pathOr } from 'ramda';

export const getActionType = prop('type');
export const getPayloadData = pathOr({}, ['payload', 'data']);

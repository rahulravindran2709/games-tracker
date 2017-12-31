import axios from 'axios';
import queryString from 'query-string';
import config from 'configuration';
import { pathOr } from 'ramda';

const apiServerInstance = axios.create(config.serverConfig);

console.log(apiServerInstance.defaults, 'sdfsdf');
export const getJSONFromServer = (relativeUrl, queryObject) => {
  const query = queryString.stringify(queryObject);
  return apiServerInstance.get(`${relativeUrl}?${query}`);
};

export const postJSONToServer = (relativeUrl, requestBody) =>
  apiServerInstance.post(relativeUrl, requestBody);

export const addAuthHeader = (data) => {
  const token = pathOr('', ['value', 'headers', 'authorization'])(data);
  console.log(token, 'Value of token');
  apiServerInstance.defaults.headers.common.Authorization = token;
};

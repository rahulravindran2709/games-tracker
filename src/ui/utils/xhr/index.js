import axios from 'axios';
import queryString from 'query-string';
import config from 'configuration';
import { pathOr } from 'ramda';

const apiServerInstance = axios.create(config.serverConfig);

export const getJSONFromServer = (relativeUrl, queryObject, token) => {
  const query = queryString.stringify(queryObject);
  const authToken = token ? {
    headers: { Authorization: token },
  } : { };
  return apiServerInstance.get(`${relativeUrl}?${query}`, authToken);
};

export const getJsonFromServerWithAuth = token => (relativeUrl, queryObject) =>
  getJSONFromServer(relativeUrl, queryObject, token);

export const postJSONToServer = (relativeUrl, requestBody, token) => {
  const authToken = token ? {
    headers: { Authorization: token },
  } : { };
  return apiServerInstance.post(relativeUrl, requestBody, authToken);
};

export const postJsonToServerWithAuth = token => (relativeUrl, requestBody) =>
  postJSONToServer(relativeUrl, requestBody, token);

export const addAuthHeader = (data) => {
  const token = pathOr('', ['value', 'headers', 'authorization'])(data);
  console.log(token, 'Value of token');
  apiServerInstance.defaults.headers.common.Authorization = token;
};

export const resetAuthHeader = () => {
  apiServerInstance.defaults.headers.common.Authorization = null;
};

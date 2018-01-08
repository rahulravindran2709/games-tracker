import axios from 'axios';
import queryString from 'query-string';
import config from 'configuration';

const apiServerInstance = axios.create(config.serverConfig);

export const getJSONFromServer = (relativeUrl, queryObject, token) => {
  const query = queryString.stringify(queryObject);
  const authToken = token ? {
    headers: { Authorization: token },
  } : { };
  return apiServerInstance.get(`${relativeUrl}?${query}`, authToken);
};


export const postJSONToServer = (relativeUrl, requestBody, token) => {
  const authToken = token ? {
    headers: { Authorization: token },
  } : { };
  return apiServerInstance.post(relativeUrl, requestBody, authToken);
};

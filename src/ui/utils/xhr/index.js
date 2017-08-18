import axios from 'axios';
import queryString from 'query-string';
import config from 'configuration';

const apiServerInstance = axios.create(config.serverConfig);


export const getJSONFromServer = (relativeUrl, queryObject) => {
  const query = queryString.stringify(queryObject);
  console.log(query, 'query')
  return apiServerInstance.get(`${relativeUrl}?${query}`);
};

export const postJSONToServer = () => {
  console.log('Placeholder for post');
  return null;
};

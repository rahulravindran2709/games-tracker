import { getAuthToken } from 'utils';

const serverConfig = {
  baseURL: 'http://localhost:8080/api',
  headers: {
    Authorization: getAuthToken(),
  },
};
const config = {
  serverConfig,
};
export default config;

import { getAuthToken } from 'utils';

const baseUrlConfig = {
  baseURL: 'http://localhost:8080/api',
};

const token = getAuthToken();
const configWithAuthHeader = {
  headers: {
    Authorization: token,
  },
};
const serverConfig = token ? { ...baseUrlConfig, ...configWithAuthHeader } : baseUrlConfig;
const config = {
  serverConfig,
};
export default config;

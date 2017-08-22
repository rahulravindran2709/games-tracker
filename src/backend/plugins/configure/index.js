import nconf from 'nconf';
import path from 'path';

const defaultOptions = {
  configFolder: path.resolve(process.cwd(), 'config/'),
  configFileName: 'config',
  configExt: 'json',
};
const getAbsoluteConfigFolderPath = configFolderName =>
path.resolve(process.cwd(), configFolderName);

const getEnvConfigFilePath = (options) => {
  const { configFolder, configFileName, configExt } = options;
  const { NODE_ENV } = process.env;
  const absoluteConfigFolderPath = getAbsoluteConfigFolderPath(configFolder);
  return path.resolve(absoluteConfigFolderPath, `${configFileName}.${NODE_ENV}.${configExt}`);
};
const getBaseConfigFilePath = (options) => {
  const { configFolder, configFileName, configExt } = options;
  const absoluteConfigFolderPath = getAbsoluteConfigFolderPath(configFolder);
  return path.resolve(absoluteConfigFolderPath, `${configFileName}.${configExt}`);
};
const register = (server, options, next) => {
  server.log(['plugin', 'info'], "Registering the 'config' plugin");
  const pluginOptions = {
    ...defaultOptions,
    ...options,
  };
  const envConfigFilePath = getEnvConfigFilePath(pluginOptions);
  const baseConfigFilePath = getBaseConfigFilePath(pluginOptions);
  server.log(['plugin', 'info'], `Config file path ${envConfigFilePath}`);
  nconf.argv()
   .env()
   .file('envConfig', { file: envConfigFilePath })
   .file({ file: baseConfigFilePath });
  server.expose('CurrentConfiguration', nconf);
  return next();
};

register.attributes = {
  name: 'configure',
};
export default register;

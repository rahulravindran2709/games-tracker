import cors from 'hapi-cors';
import authJwt from 'hapi-auth-jwt2';
import datastore from '../datastore';
import serviceRegistry from '../plugins/serviceregistry';
import routes from '../routes';
import { getConfiguration } from './shared/utils';

function register(server, options, next) {
  server.log(['plugin', 'info', 'api'], 'Registering the api server plugin');
  const configurationObject = getConfiguration(server);
  const corsOptions = configurationObject.get('apiServer:cors');
  server.log(['plugins', 'info', 'api', 'cors'],
   `Registering cors with options ${JSON.stringify(corsOptions)}`);
  server.register([{
    register: cors,
    options: corsOptions,
  }, {
    register: authJwt,
  }, {
    register: datastore,
  }, {
    register: serviceRegistry,
  }])
  .then(() => {
    server.route(routes.api);
    server.route(routes.enumerated);
    server.route(routes.user);
    server.route(routes.collection);
  })
  .then(() => {
    server.log(['plugin', 'info', 'api', 'routes'], 'Successfully configured routes');
    return next();
  });
}
register.attributes = {
  name: 'webservice',
};
export default register;

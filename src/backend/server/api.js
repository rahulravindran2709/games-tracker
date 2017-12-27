import cors from 'hapi-cors';
import authJwt from 'hapi-auth-jwt2';
import datastore from '../datastore';
import serviceRegistry from '../plugins/serviceregistry';
import routes from '../routes';
import { getConfiguration } from './shared/utils';

const validate = (decoded, request, callback) => {
  const { sessions } = request.server.app;
  const session = sessions[decoded.id];
  if (!session || !session.valid) {
    return callback(null, false);
  }
  return callback(null, true);
};
const initialiseJwtAuth = (server, configurationObject) => () => {
  server.app.sessions = {};
  const secret = configurationObject.get('apiServer:auth:secret');
  server.auth.strategy('jwt', 'jwt', true, {
    key: secret,
    validateFunc: validate,
    verifyOptions: { ignoreExpiration: true, algorithms: ['HS256'] },
  });
};
const initialiseApiRoutes = (server, routeObject) => () => {
  server.route(routeObject.api);
  server.route(routeObject.enumerated);
  server.route(routeObject.user);
  server.route(routeObject.collection);
};
function register(server, options, next) {
  server.log(['plugin', 'info', 'api'], 'Registering the api server plugin');
  const configurationObject = getConfiguration(server);
  const corsOptions = configurationObject.get('apiServer:cors');
  server.register([{ register: cors, options: corsOptions }])
  .then(() => server.register([
    { register: authJwt },
  ]))
  .then(initialiseJwtAuth(server, configurationObject))
  .then(() => server.register([
    { register: datastore },
    { register: serviceRegistry }]))
  .then(initialiseApiRoutes(server, routes))
  .then(() => {
    server.log(['plugin', 'info', 'api', 'routes'], 'Successfully configured routes');
    return next();
  });
}
register.attributes = {
  name: 'webservice',
};
export default register;

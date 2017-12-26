import cors from 'hapi-cors';
import authJwt from 'hapi-auth-jwt2';
import datastore from '../datastore';
import serviceRegistry from '../plugins/serviceregistry';
import routes from '../routes';
import { getConfiguration } from './shared/utils';

const validate = (decoded, request, callback) => {
  const { sessions } = request.server.app;
  if (!sessions[decoded.id]) {
    return callback(null, false);
  }
  return callback(null, true);
};
function register(server, options, next) {
  server.log(['plugin', 'info', 'api'], 'Registering the api server plugin');
  const configurationObject = getConfiguration(server);
  const corsOptions = configurationObject.get('apiServer:cors');
  server.register([{
    register: cors,
    options: corsOptions,
  }])
  .then(() => server.register([{ register: authJwt }]))
  .then(() => {
    server.app.sessions = {};
    const secret = configurationObject.get('apiServer:auth:secret');
    server.auth.strategy('jwt', 'jwt', true, {
      key: secret,
      validateFunc: validate,
      verifyOptions: { ignoreExpiration: true, algorithms: ['HS256'] },
    });
  })
  .then(() => server.register([{ register: datastore },
    { register: serviceRegistry }]))
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

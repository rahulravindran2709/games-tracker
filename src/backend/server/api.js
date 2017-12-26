import cors from 'hapi-cors';
import datastore from '../datastore';
import serviceRegistry from '../plugins/serviceregistry';
import routes from '../routes';

function register(server, options, next) {
  server.log(['plugin', 'info', 'api'], 'Registering the api server plugin');
  server.register([{
    register: cors,
    options: {
      origins: ['http://localhost:3000'],
    },
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

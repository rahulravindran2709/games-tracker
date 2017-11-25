import routes from '../routes';

function register(server, options, next) {
  server.log(['plugin', 'info', 'api', 'routes'], 'Registering the api routes plugin');
  server.route(routes.api);
  server.route(routes.enumerated);
  server.route(routes.user);
  return next();
}
register.attributes = {
  name: 'webservice',
};
export default register;

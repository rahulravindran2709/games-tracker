import routes from '../routes';

function register(server, options, next) {
  server.route(routes.api);
  return next();
}
register.attributes = {
  name: 'webservice',
};
export default register;

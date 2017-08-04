import routes from '../routes';

function register(server, options, next) {
  server.route(routes);
  return next();
}
register.attributes = {
  name: 'webservice',
};
export default register;

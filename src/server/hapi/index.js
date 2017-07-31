import hapi from 'hapi';
import path from 'path';
import WebpackPlugin from 'hapi-webpack-plugin';
import routes from '../routes';

const server = new hapi.Server();
server.connection({
  port: 3000,
});
console.log(process.cwd(), 'Path')
const configFilePath = path.resolve(process.cwd(), 'webpack.config.js');
server.route(routes);
server.register({
  register: WebpackPlugin,
  options: configFilePath,
},
(error) => {
  if (error) {
    return console.error(error);
  }
  return server.start(() => console.log('Server running at:', server.info.uri));
});

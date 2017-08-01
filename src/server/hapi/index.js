import hapi from 'hapi';
import path from 'path';
import Webpack from 'webpack';
import routes from '../routes';
const configFilePath = path.resolve(process.cwd(), 'webpack.config.js');
const Config = require(configFilePath);

const server = new hapi.Server();
const host = '127.0.0.1';
const port = 3000
server.connection({
  port,
  host,
});
console.log(process.cwd(), 'Path')

const compiler = Webpack(Config);
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  host,
  port,
  historyApiFallback: true,
  publicPath: Config.output.publicPath,
});
const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {},
});

server.ext('onRequest', (request, reply) => {
  devMiddleware(request.raw.req, request.raw.res, (devError) => {
    if (devError) {
      return reply(devError);
    }
    return reply.continue();
  });
});

server.ext('onRequest', (request, reply) => {
  hotMiddleware(request.raw.req, request.raw.res, (err) => {
    if (err) {
      return reply(err);
    }
    return reply.continue();
  });
});
server.ext('onPreResponse', (request, reply) => {
  const filename = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(filename, (fileReadErr, result) => {
    if (fileReadErr) {
      return reply(fileReadErr);
    }
    return reply(result).type('text/html');
  });
});
server.route(
  {
    method: 'GET',
    path: '/api',
    handler: (request, reply) => {
      reply('hello world');
    },
  },
  {
    method: 'GET',
    path: '/{page}',
    handler: (request, reply) => {
      reply();
    },
  });
server.start((err) => {
  if (err) {
    throw err;
  }
});

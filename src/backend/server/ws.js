import path from 'path';
import Webpack from 'webpack';

function register(server, options, next) {
  const configFilePath = path.resolve(process.cwd(), 'webpack.config.js');
  const Config = require(configFilePath);
  const host = '127.0.0.1';
  const wsPort = 3000;
  const compiler = Webpack(Config);
  const devMiddleware = require('webpack-dev-middleware')(compiler, {
    host,
    wsPort,
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
  return next();
}


register.attributes = {
  name: 'webServer',
};
export default register;

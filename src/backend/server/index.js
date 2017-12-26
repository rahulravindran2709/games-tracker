import hapi from 'hapi';
import good from 'good';
import Blipp from 'blipp';
import Disk from 'catbox-disk';
// import authJwt from 'hapi-auth-jwt2';
import path from 'path';
import webServerPlugin from './ws';
import apiServerPlugin from './api';
import config from '../config';
import configure from '../plugins/configure';
import { getConfiguration } from './shared/utils';

const server = new hapi.Server({
  cache: [
    {
      name: 'diskCache',
      engine: Disk,
      host: '127.0.0.1',
      cachePath: '/Users/rahulravindran/Desktop/work/cache',
      cleanEvery: 3600000,
      partition: 'cache',
    },
  ],
},
  );
/* Configuring the config plugin */
server.register([
  { register: configure,
    options: {
      configFolder: path.resolve(process.cwd(), 'src/backend/config'),
    },
  }])
  /* Creating both server connections */
  .then(() => {
    const configuration = getConfiguration(server);
    const wsHost = configuration.get('webServer:host');
    const wsPort = configuration.get('webServer:port');
    server.connection({
      port: wsPort,
      host: wsHost,
      labels: ['ws'],
    });
    const apiHost = configuration.get('apiServer:host');
    const apiPort = configuration.get('apiServer:port');
    server.connection({
      port: apiPort,
      host: apiHost,
      labels: ['api'],
    });
  })
  /* Registering good after both connections have been created */
  .then(() => server.register([{ register: good, options: config.good }]))
  .then(() => {
    /* API server specific plugin registration */
    const apiServer = server.select('api');
    apiServer.realm.modifiers.route.prefix = '/api';
    return apiServer.register([{
      register: apiServerPlugin,
    },
    ])
    .then(() => server.log(['server', 'api'], 'API server is configured'))
    .catch(err => console.error(err, 'Error occurred while configuring api server'));
  })
  .then(() => {
    /* Web server specific plugin registration */
    const wsServer = server.select('ws');
    return wsServer.register({
      register: webServerPlugin,
    })
    .then(() => server.log(['server', 'ws'], 'Web server is configured'))
    .catch(err => console.error(err, 'Error occurred while confguring web server'));
  })


/* Common plugin registration */
  .then(() => server.register([{ register: Blipp }]))
  .then(() => server.start())
  .then(() => server.connections.forEach(connection => server.log(['startup'], `Server running at: ${connection.info.uri}`)))
  .catch(err => console.error(err, 'Error occurred while trying to start server'));

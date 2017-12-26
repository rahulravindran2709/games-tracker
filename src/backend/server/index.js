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
const host = '127.0.0.1';
/* Configuring the config plugin */
server.register([
  { register: configure,
    options: {
      configFolder: path.resolve(process.cwd(), 'src/backend/config'),
    },
  }])
  /* Creating both server connections */
  .then(() => {
    const wsPort = getConfiguration(server).get('webServer:port');
    server.connection({
      port: wsPort,
      host,
      labels: ['ws'],
    });
    const apiPort = getConfiguration(server).get('apiServer:port');
    server.connection({
      port: apiPort,
      host,
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
    const wsServer = server.select('ws');
    return wsServer.register({
      register: webServerPlugin,
    })
    .then(() => server.log(['server', 'ws'], 'Web server is configured'))
    .catch(err => console.error(err, 'Error occurred while confguring web server'));
  })
    /* Web server specific plugin registration */

/* Common plugin registration */
.then(() => server.register([
    { register: Blipp }]))
.then(() => server.start())
.then(() => server.connections.forEach(connection => server.log(['startup'], `Server running at: ${connection.info.uri}`)))
.catch(err => console.error(err, 'Error occurred while trying to start server'));

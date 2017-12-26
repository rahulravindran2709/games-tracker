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
const wsPort = 3000;
const apiPort = 3010;

server.connection({
  port: wsPort,
  host,
  labels: ['ws'],
});

server.connection({
  port: apiPort,
  host,
  labels: ['api'],
});
const wsServer = server.select('ws');
const apiServer = server.select('api');
server.register([{ register: good, options: config.good },
  { register: Blipp },
  { register: configure,
    options: {
      configFolder: path.resolve(process.cwd(), 'src/backend/config'),
    },
  }])
  .then(() => {
    /* API server specific plugin registration */
    apiServer.realm.modifiers.route.prefix = '/api';
    return apiServer.register([{
      register: apiServerPlugin,
    },
    ])
    .then(() => server.log(['server', 'api'], 'API server is configured'))
    .catch(err => console.error(err, 'Error occurred while configuring api server'));
  })
  .then(() =>
    /* Web server specific plugin registration */
     wsServer.register({
       register: webServerPlugin,
     })
    .then(() => server.log(['server', 'ws'], 'Web server is configured'))
    .catch(err => console.error(err, 'Error occurred while confguring web server')))
/* Common plugin registration */
.then(() => server.start())
.then(() => server.connections.forEach(connection => server.log('Server running at:', connection.info.uri)))
.catch(err => console.error(err, 'Error occurred while trying to start server'));

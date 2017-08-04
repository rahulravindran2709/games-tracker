import hapi from 'hapi';
import webServerPlugin from './ws';
import apiServerPlugin from './api';

const server = new hapi.Server();
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

wsServer.register({
  register: webServerPlugin,
}, (err) => {
  if (err) {
    console.error(err, 'Error occurred');
  }
  console.log('Web server configured');
});
apiServer.register({
  register: apiServerPlugin,
}, (err) => {
  if (err) {
    console.error(err, 'Error occurred in api server');
  }
  console.log('Api server configured');
});
server.start((err) => {
  if (err) {
    throw err;
  }
  server.connections.forEach(connection => console.log('Server running at:', connection.info.uri));
});

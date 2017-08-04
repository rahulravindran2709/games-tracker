module.exports = [
  {
    method: 'GET',
    path: '/api',
    handler: (request, reply) => {
      reply('hello world');
    },
  },
];

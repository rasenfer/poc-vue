module.exports = {
  base: '/api',
  routes: [
    {
      method: 'PUT"',
      path: '/*',
      callback(req, res) {
        res
          .status(200)
          .send('OK')
          .end();
      }
    },
    require('./characters/characters-mock.js')
  ]
};

const characters = require('./characters-mock-data.json');

const headers = {
  link: [
    '<https://anapioficeandfire.com/api/characters?page=2&pageSize=10>; rel="next"',
    '<https://anapioficeandfire.com/api/characters?page=1&pageSize=10>; rel="first"',
    '<https://anapioficeandfire.com/api/characters?page=214&pageSize=10>; rel="last"'
  ]
};

module.exports = {
  method: 'GET',
  path: '/characters',
  callback(req, res) {
    res
      .append('link', headers.link.join())
      .status(200)
      .json(characters);
  }
};

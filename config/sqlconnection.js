const {createPool} = require('mysql')


var conn = createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hillside'
  });


  module.exports = conn
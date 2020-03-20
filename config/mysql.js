const mysql = require('mysql')


var conn = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hillside'
  });


  module.exports = conn
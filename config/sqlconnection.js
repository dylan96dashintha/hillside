var mysql = require('mysql');

var connection = mysql.createConnection(
    {
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'hillside'
    }
);

  module.exports = connection;
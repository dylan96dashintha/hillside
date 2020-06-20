var mysql = require('mysql');

var connection = mysql.createConnection(
    {
        connectionLimit: 10,
        host: 'remotemysql.com',
        user: 'jhgiTddws2',
        password: 'JXCxbpjg6M',
        database: 'jhgiTddws2',
        port:3306
        
    }
);

  module.exports = connection;
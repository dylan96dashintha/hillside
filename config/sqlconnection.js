var mysql = require('mysql');

// var connection = mysql.createPool(
//     {
//         connectionLimit: 10,
//         host: 'remotemysql.com',
//         user: 'jhgiTddws2',
//         password: 'JXCxbpjg6M',
//         database: 'jhgiTddws2',
//         port:3306
        
//     }
// );

var connection = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hillside'
})

  module.exports = connection;
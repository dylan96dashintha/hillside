// const bcrypt  = require('bcrypt');

var conn= require('./connection');

function adminLogin(username,password,callback){
    conn.query(`SELECT COUNT(id) as count,firstname,lastname FROM admin WHERE username = '${username}' AND password = '${password}'`,function(err,result){
        if(err){callback(err,false);}
        else if(result[0].count == 1 ){callback(false,result);}
        else{callback(false,false)}        
    });
}

module.exports = adminLogin;
// const conn = require('../routes/connection')
var conn = require('../config/sqlconnection');


function adminLogin(uname,psswrd,callback){
    conn.query(`SELECT firstname, lastname, emptype, username FROM admin WHERE username = '${uname}' AND password = '${psswrd}'`,function(err,result){
        if(err){callback(err,false);}
        else if(result.length === 1){
            callback(false,result[0]);
        }else{
            callback(null,false);
        }
    });
}

module.exports = {adminLogin}
// const conn = require('../routes/connection')
var conn = require('../config/sqlconnection');


function adminLogin(uname,psswrd,callback){
    conn.query(`SELECT firstname, lastname, emptype, username, COUNT(id) as count FROM admin WHERE username = '${uname}' AND password = '${psswrd}'`,function(err,result){
        if(err){callback(err,false);}
        else if(result[0].count == 1){
            callback(false,result[0]);
        }else{
            callback(null,false);
        }
    });
}

module.exports = {adminLogin}
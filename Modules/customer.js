const conn = require('../config/mysql')




const regcustomer = async(username, email, password) => {
    conn.connect( err => {
        if(err){
            throw err
        }
        conn.query('INSERT INTO "customer" ("username", "email", "password") VALUES (?,?,?)',[username, email, password],error,result => {
        if(error){
            throw error
        }
        console.log(result)
        return result //customer table => id,username,email,password
        })
    })
}


module.exports = {regcustomer}
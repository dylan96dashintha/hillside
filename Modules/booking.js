// const conn = require('../routes/conn')
var conn = require('../config/sqlconnection');
var oid = require('./createOrderId');
const { functions } = require('firebase');
// const { functions } = require('firebase');






function creaetBooking(bookingDet, callback) {
    // var bookingDet = {
    //     orderId: false,
    //     checkinData: "2020-02-12",
    //     checkoutDate: "2020-02-12",
    //     bookingTime: "2020-02-6 12:12:12",
    //     roomId: "D1",
    //     orderType: "online or manual",
    //     customerId: false,
    //     customerFName: "kamal",
    //     customerLName: "perera",
    //     customerEmail: "asw@gmail.com",
    //     customerMobile: "0458877565",
    //     customerAddress: "galle vanchawala",
    //     pavementStat: "yes"
    // }
    var orderId = null;
    var customerId = null;
    if (!bookingDet.orderid) {
        orderId = oid();
    } else {
        orderId = bookingDet.orderId
    }

    if (!bookingDet.customerId) {
        customerId = oid();
    } else {
        customerId = bookingDet.customerId
    }

    conn.getConnection(function(err,connection) {  
        if (err) {
          console.error('error connecting: ' + err.stack);
          callback(err.message,false) 
        }
        console.log('connected as id ' + connection.threadId);
        connection.beginTransaction(function (err) {
            if (err) { callback("Error Occured", false) }
            else {
                var query_customerdet = `INSERT INTO customerdetails (customerid, fname, lname, email, mobile, address, pavement) VALUES ('${customerId}','${bookingDet.customerFName}','${bookingDet.customerLName}','${bookingDet.customerEmail}','${bookingDet.customerMobile}','${bookingDet.customerAddress}','${bookingDet.pavementStat}')`
                console.log(query_customerdet);
                connection.query(query_customerdet, function (err, result) {
                    if (err) {
                        connection.rollback(function () {
                            console.log(err);
                            callback(err.message, false);
                        });
                    } else {
                        var query_orderdet = `INSERT INTO orderdetails VALUES ('${bookingDet.checkinData}','${bookingDet.checkoutDate}','${orderId}','${bookingDet.roomId}','${bookingDet.bookingTime}','${customerId}','${bookingDet.orderType}')`
                        console.log(query_orderdet);
                        connection.query(query_orderdet, function (err, resullt) {
                            if (err) {
                                connection.rollback(function () {
                                    console.log(err);
                                    callback(err.message, false);
                                });
                            } else {
                                connection.commit(function (err) {
                                    if (err) {
                                        connection.rollback(function () {
                                            console.log(err);
                                            callback(err.message, false);
                                        });
                                    }else{
                                        callback(false, "Added New Record")
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    });


}

function getDeleted(callback){
    var query = `SELECT * FROM discardeddetails NATURAL JOIN orderdetails`;
    conn.query(query, function(err,result){
        if(err){
            callback(err.message, false);
        }else{
            console.log(result);
            callback(false, result);
        }
    })
}

function ses(a,callback){
    console.log(a);
    callback(false,"okkkkk");
}

module.exports = {creaetBooking,ses,getDeleted};
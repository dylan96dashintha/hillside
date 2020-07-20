var conn = require('../config/sqlconnection');

function getAllRooms(calback){
    var query = `SELECT * FROM roomdet`
    conn.query(query, function(err,result){
        if(err){
            calback(err.message, false)
        }else{
            calback(false,result);
        }
    })
}

function getRoomDetailsWithId(id, callback){
    var query = `SELECT * FROM roomdet WHERE roomId = '${id}'`;
    conn.query(query, function(err,result){
        if(err){
            callback(err.message, false);
        }else{
            callback(false, result[0]);
        }
    });
}

function editRoomDetails(roomdet,callback){
    var query = `UPDATE roomdet SET des =  '${roomdet.des}', fulldescription = '${roomdet.fulldescription}', price = '${roomdet.price}' WHERE roomId = '${roomdet.roomId}'`;
    conn.query(query, function(err,result){
        if(err){
            callback(err.message, false);
        }else{
            callback(false,true);
        }
    })
}



module.exports = {getAllRooms,editRoomDetails,getRoomDetailsWithId};
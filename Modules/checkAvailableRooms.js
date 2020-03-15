var pool = require('./dbConnection');

async function getNotBookedRooms(startDate, endDate){
    startDate = Date.parse(startDate);
    endDate = Date.parse(endDate);
    today = Date.parse(new Date());
    console.log(today);

    let query = `SELECT * FROM orderdetails WHERE checkIn > '${today}'`;
    const result = await pool.query(query);
    query = `SELECT roomId FROM roomdet`
    const rooms = await pool.query(query);
    
    bookedRooms = []
    freeRooms = []

    for(var i=0 ; i<result.length; i++){
        if(((result[i].checkIn < startDate) &&(startDate < result[i].chechout))  || ((result[i].checkIn < endDate) &&(endDate < result[i].chechout))){
            bookedRooms.push(result[i].roomId);
        }else if((startDate < result[i].checkIn) && (result[i].chechout < endDate)){
            bookedRooms.push(result[i].roomId);
        }
    }

    console.log(bookedRooms);

    for( i = 0; i<rooms.length; i++){
        if( ! bookedRooms.includes(rooms[i].roomId) ){
            freeRooms.push(rooms[i].roomId)
        }
    }

    console.log(freeRooms);
    getRoomDetails(freeRooms);

    return freeRooms;  

}

async function getRoomDetails(rooms){
    var roomsStr =''
    for(var j=0; j<rooms.length-1; j++){
        roomsStr+="'"+rooms[j]+"',";
    }
    roomsStr+="'"+rooms[rooms.length-1]+"'";
    try{
    
    var roomsQuery = `SELECT * FROM roomdet WHERE roomId in (${roomsStr})`;
    console.log(roomsQuery);
    var roomDetails = await pool.query(roomsQuery);
    console.log(roomDetails.length);
    var details=[];
    // for(var j=0; j<roomDetails.length; j++){
    //      roomDetails.push({ image: roomDetails[j].img, roomName : roomDetails[j].roomName, description: roomDetails[j].des});
    // }
    // console.log(details);
    // return details;
    }catch(err){
        console.log(err);
    }
    

}

module.exports = getNotBookedRooms;
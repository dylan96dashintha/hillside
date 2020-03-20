var conn= require('./connection');

//return awailable room ids, acording to time period;
function getNotBookedRooms(type,sDate,eDate,callback){
    var startDate = Date.parse(sDate);
    var endDate = Date.parse(eDate);
    var today = Date.parse(new Date());

    conn.query(`SELECT * FROM orderdetails WHERE checkIn > '${today}'`,function(err,result){
        if(err){callback(err,false)}
        else{
            var orderDetails = result;
            if(type=='All'){var q = `SELECT roomId FROM roomdet`;}
            if(type=='F'){var q= `SELECT roomId FROM roomdet WHERE roomId LIKE 'F%'` ;}
            if(type=='T'){var q= `SELECT roomId FROM roomdet WHERE roomId LIKE 'T%'` ;}
            if(type=='D'){var q= `SELECT roomId FROM roomdet WHERE roomId LIKE 'D%'` ;} 
            conn.query(q,function(err,result){
                if(err){callback(err,false)}
                else{
                    var rooms = result;
                    bookedRooms = []
                    freeRooms = []

                    for(var i=0 ; i<orderDetails.length; i++){
                        if(((orderDetails[i].checkIn < startDate) &&(startDate < orderDetails[i].chechout))  || ((orderDetails[i].checkIn < endDate) &&(endDate < orderDetails[i].chechout))){
                            bookedRooms.push(orderDetails[i].roomId);
                        }else if((startDate < orderDetails[i].checkIn) && (orderDetails[i].chechout < endDate)){
                            bookedRooms.push(orderDetails[i].roomId);
                        }
                    }

                    // console.log(bookedRooms);

                    for( i = 0; i<rooms.length; i++){
                        if( ! bookedRooms.includes(rooms[i].roomId) ){
                            freeRooms.push(rooms[i].roomId)
                        }
                    }

                    // console.log(freeRooms);
                    // getRoomDetails(freeRooms);

                    callback(null,freeRooms);
                }
                
            });
        }
    });
}

//returns the reoom detals
//shold be input the rooms ids as an array
function getRoomsDetails(rooms,callback){
    var roomsStr =''
    for(var j=0; j<rooms.length-1; j++){
        roomsStr+="'"+rooms[j]+"',";
    }
    roomsStr+="'"+rooms[rooms.length-1]+"'";
    conn.query(`SELECT * FROM roomdet WHERE roomId in (${roomsStr})`,function(err,result){
        if(err){callback(err,null);}
        else{
            var roomDetails = result;
            var details=[];
            for(var j=0; j<roomDetails.length; j++){
                details.push({ 
                    image: roomDetails[j].img,
                    roomName : roomDetails[j].roomName,
                    description: roomDetails[j].des,
                    fullDescription: roomDetails[j].fulldescription,
                    price: roomDetails[j].price 
                 });
            }
            callback(null,details);
        }
    });
}


module.exports = {getNotBookedRooms, getRoomsDetails};




// var pool = require('./dbConnection');





// async function getNotBookedRooms(startDate, endDate){
//     startDate = Date.parse(startDate);
//     endDate = Date.parse(endDate);
//     today = Date.parse(new Date());
//     console.log(today);

//     let query = `SELECT * FROM orderdetails WHERE checkIn > '${today}'`;
//     const result = await pool.query(query);
//     query = `SELECT roomId FROM roomdet`
//     const rooms = await pool.query(query);
    
//     bookedRooms = []
//     freeRooms = []

//     for(var i=0 ; i<result.length; i++){
//         if(((result[i].checkIn < startDate) &&(startDate < result[i].chechout))  || ((result[i].checkIn < endDate) &&(endDate < result[i].chechout))){
//             bookedRooms.push(result[i].roomId);
//         }else if((startDate < result[i].checkIn) && (result[i].chechout < endDate)){
//             bookedRooms.push(result[i].roomId);
//         }
//     }

//     console.log(bookedRooms);

//     for( i = 0; i<rooms.length; i++){
//         if( ! bookedRooms.includes(rooms[i].roomId) ){
//             freeRooms.push(rooms[i].roomId)
//         }
//     }

//     console.log(freeRooms);
//     // getRoomDetails(freeRooms);

//     // return freeRooms;  

// }

// // async function getRoomDetails(rooms){
// //     var roomsStr =''
// //     for(var j=0; j<rooms.length-1; j++){
// //         roomsStr+="'"+rooms[j]+"',";
// //     }
// //     roomsStr+="'"+rooms[rooms.length-1]+"'";
// //     try{
    
// //     var roomsQuery = `SELECT * FROM roomdet WHERE roomId in (${roomsStr})`;
// //     console.log(roomsQuery);
// //     var roomDetails = await pool.query(roomsQuery);
// //     console.log(roomDetails);
// //     var details=[];
// //     for(var j=0; j<roomDetails.length; j++){
// //          roomDetails.push({ image: roomDetails[j].img, roomName : roomDetails[j].roomName, description: roomDetails[j].des});
// //     }
// //     console.log(details);
// //     return details;
// //     }catch(err){
// //         console.log(err);
// //     }
    

// // }


// function getRoomDetailsFromDd(rooms){
//     return new Promise(function(resolve,reject){
//         var roomsStr =''
//         for(var j=0; j<rooms.length-1; j++){
//             roomsStr+="'"+rooms[j]+"',";
//         }
//         roomsStr+="'"+rooms[rooms.length-1]+"'";    
        
//         var roomsQuery = `SELECT * FROM roomdet WHERE roomId in (${roomsStr})`;
//         // console.log(roomsQuery);
//         resolve(pool.query(roomsQuery));
//         });
// }

// async function getRoomDetails(rooms){
//     var roomDetails = await getRoomDetailsFromDd(rooms);
//     // console.log(roomDetails);
//     var details=[];
//     for(var j=0; j<roomDetails.length; j++){
//          details.push({ image: roomDetails[j].img, roomName : roomDetails[j].roomName, description: roomDetails[j].des});
//     }
//     return Promise.resolve(details);

// }

// module.exports = {getNotBookedRooms,getRoomDetails};
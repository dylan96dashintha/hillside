var pool = require('./dbConnection')

async function getNotBookedRooms(startDate, endDate){
    startDate = Date.parse(startDate);
    endDate = Date.parse(endDate);
    today = Date.parse(new Date());
    console.log(today);

    let query = `SELECT * FROM orderdetails WHERE checkIn > '${today}'`;
    const result = await pool.query(query);
    let query = `SELECT roomId FROM rooms`
    const rooms = await pool.query(query);
    
    bookedRooms = []

    for(var i=0 ; i<result.length; i++){
        if(((result[i].checkIn < startDate) &&(startDate < result[i].chechout))  || ((result[i].checkIn < endDate) &&(endDate < result[i].chechout))){
            bookedRooms.push(result[i].roomId);
        }else if((startDate < result[i].checkIn) && (result[i].chechout < endDate)){
            bookedRooms.push(result[i].roomId);
        }
    }

    console.log(bookedRooms);
        

    
    

    

}

module.exports = getNotBookedRooms;
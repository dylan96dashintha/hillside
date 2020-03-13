//var express = require('express');

function getCheckInDate(str){
    let checkArray = str.split("-");
    let checkIn = Date.parse(checkArray[0]);
    return checkIn;
}

function getCheckOutDate(str){
    let checkArray = str.split("-");
    let checkOut = Date.parse(checkArray[1]);
    return checkOut;
}



module.exports = {getCheckInDate , getCheckOutDate}
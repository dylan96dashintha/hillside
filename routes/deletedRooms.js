var express = require('express');
var router = express.Router();
var a = require('../Modules/booking');
const { render } = require('../app');

router.get('/',function(req,res,next){
    console.log(req.session)
    // if(req.session.flag){
        console.log("yes")
        a.getDeleted(function(err,result){
            var empDetails = {
                empType: req.session.empType,
                name: req.session.empFirstName + " "+ req.session.empLastName
            }
            var room = result;

            res.render('deletedRecordes', {empDetails: empDetails, rooms:room})
        })
    // }else{
        // console.log("no")
        // res.redirect('/adminAuth')
    // }
    
})

module.exports = router
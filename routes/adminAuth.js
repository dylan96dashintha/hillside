var express = require('express');
var router = express.Router();
const accessTokenSecret = 'secret';
var jwt = require('jsonwebtoken');

// var conn = require('./connection');
var conn = require('../config/sqlconnection');

var adminAuth = require('../Modules/adminAuth')


router.get('/', function (req, res, next) {
    res.render('adminAuth')
    
  });

router.post('/' ,function(req,res){
    let psw = req.body.inputPsw;
    let username = req.body.uname;
    console.log(psw)
    adminAuth.adminLogin(username,psw,function(err,result){
        if(err){
            res.redirect('/adminAuth');
        }
        else if(result){
            req.session.flag = true;
            req.session.empType = result.emptype
            req.session.empUsername = result.username
            req.session.empFirstName = result.firstname;
            req.session.empLastName = result.lastname;
            res.redirect('/admin');
        }else{
            res.redirect('/adminAuth');
        }
    });




});
module.exports = router;
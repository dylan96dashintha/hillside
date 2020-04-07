var express = require('express');
var router = express.Router();
const accessTokenSecret = 'secret';
var jwt = require('jsonwebtoken');
var conn = require('./connection');
const adminLogin = require('../Modules/admin');

router.get('/', function (req, res, next) {
    res.render('adminAuth')
    
  });

router.post('/' ,function(req,res){
    let psw = req.body.inputPsw;
    let username = req.body.uname;
    adminLogin(username,psw,function(err,result){
        if(err){res.redirect('/adminAuth');}
        else if(result){
            req.session.flag = true;
            req.session.empFname = result[0].firstname;
            req.session.empLname = result[0].lastname;
            res.redirect('/admin');
        }else{
            res.redirect('/adminAuth');
        }
    });
    



});
module.exports = router;
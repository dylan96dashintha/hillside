var express = require('express');
var router = express.Router();
const accessTokenSecret = 'secret';
var jwt = require('jsonwebtoken');
var conn = require('./connection');

router.get('/', function (req, res, next) {
    res.render('adminAuth')
    
  });

router.post('/' ,function(req,res){
    let psw = req.body.inputPsw;
    if(psw == "hill") {
        req.session.flag = true;
        res.redirect('/admin');
    }else{
        res.redirect('/adminAuth');
    }




});
module.exports = router;
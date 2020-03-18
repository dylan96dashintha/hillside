var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('adminAuth');
    
  });

router.post('/' ,function(req,res){
    let flag = false;
    let psw = req.body.inputPsw;
    if(psw == "hill") {
        flag = true;
       // console.log(req.session.flg);
        res.redirect('/admin');
    }else{
        res.redirect('/adminAuth');
    }
});
module.exports = router;
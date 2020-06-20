var express = require('express');
var router = express.Router();


router.get('/',function(req,res,next){
    req.session = null
    res.redirect('/adminAuth');
})

module.exports = router
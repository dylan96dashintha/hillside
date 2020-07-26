router = require('express').Router();

router.get('/',(req,res) => {
    res.render('construction');
})

module.exports = router;
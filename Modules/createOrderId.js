var shortid = require('shortid');
 
// oid = shortid.generate();

function getOrderId(){
    return shortid.generate();
}

module.exports = getOrderId;
var express = require('express');
var router = express.Router();
var editRooms = require('../Modules/editRooms');
const e = require('express');



router.get('/', function (req, res, next) {
    console.log(req.session.empType);
    
    if (req.session.empType === 'owner') {
        editRooms.getAllRooms(function (err, result) {
            if (err) {
                res.send(err)
            } else {
                res.render('showRoomsAdmin', { roomDetails: result });
            }
        })
    } else {
        res.redirect('/adminAuth');
    }
})

router.get('/edit', function (req, res, next) {
    var roomId = req.query.rid;
    if (req.session.empType === 'owner') {

        editRooms.getRoomDetailsWithId(roomId, function (err, result) {
            if (err) {
                res.redirect('editRoomDetails');
            } else {
                res.render('changeRoomeDetailsAdmin', { room: result });
            }
        });
    } else {
        res.redirect('/adminAuth');
    }
})

router.post('/editRoomDetails', function (req, res, next) {
    if (req.session.empType === 'owner') {

        var editRoom = {
            roomId: req.body.roomId,
            des: req.body.description,
            fulldescription: req.body.fullDescription,
            price: req.body.price
        }
        editRooms.editRoomDetails(editRoom, function (err, result) {
            if (err) {
                console.log(err)
                res.redirect(`/editRoomDetails/edit?rid=${req.body.roomId}`)
            } else {
                res.redirect('/editRoomDetails')
            }
        })
    } else {
        res.redirect('/adminAuth');
    }

})

module.exports = router
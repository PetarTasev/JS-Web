const { getAll, getById } = require('../services/roomService');

const router = require('express').Router();


router.get('/', async (req, res) => {
    const search = req.query.search || '';
    const city = req.query.city || '';
    const fromPrice = Number(req.query.fromPrice) || 1;
    const toPrice = Number(req.query.toPrice) || 1000;
    
    const rooms = await getAll(search, city, fromPrice, toPrice);
    // now that we are reading from a data base its a async cuz we are no 
    //longer reading from our files we are sending a request somewhere there 

    res.render('catalog', {
        title: 'All Accomodation',
        rooms,
        search,
        city,
        fromPrice,
        toPrice
    });
});

router.get('/:id', async (req, res) => {
    const roomId = req.params.id;
    //console.log(req.params.id)
    const room = await getById(roomId);

    if (room) {
        res.render('details', {
            title: 'Accomodation Details',
            room
        });
    } else {
        res.render('roomNotFound', {
            title: 'Accomodation Details',
            roomId
        });
    }
});

module.exports = router;
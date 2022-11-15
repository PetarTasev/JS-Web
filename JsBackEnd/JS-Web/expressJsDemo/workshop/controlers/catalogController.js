const { getAll, getById } = require('../services/accomodationServices')

const router = require('express').Router()

router.get('/', (req, res) => {
    const rooms = getAll()
    res.render('catalog', {
        title: 'All Accomodation',
        rooms
    })
})

router.get('/:id', (req, res) => {
    const roomId = req.params.id;
    const room = getById(roomId)

    if (room) {
        res.render('details', {
            title: 'Accomodation details',
            room
        })
    } else {
        res.render('404')
    }

})

module.exports = router
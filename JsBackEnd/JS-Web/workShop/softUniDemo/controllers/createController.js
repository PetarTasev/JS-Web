const createController = require('express').Router()

createController.get('/', (req, res) => {
    res.render('create')
})

createController.post('/', (req, res) => {
    // TODO
    console.log('we here')
})

createController.get('/accessory', (req,res) => {
    res.render('createAccessory')
})

createController.post('/accessory', (req,res) => {
    //TODO
})
module.exports = createController
const createController = require('express').Router()

createController.get('/', (req, res) => {
    res.render('create')
})

createController.post('/', (req, res) => {
    // TODO
    console.log('we here')
})

module.exports = createController
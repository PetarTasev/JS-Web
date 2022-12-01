const { createAccessory } = require('../services/accessoryServices')
const { createCube } = require('../services/cubeServices')

const createController = require('express').Router()

createController.get('/', (req, res) => {
    res.render('create')
})

createController.post('/', async (req, res) => {
    try {
        await createCube(req.body.name, req.body.description, req.body.imageUrl, req.body.difficultyLevel)
        console.log('new Cube added')
        res.render('home')
    } catch (err) {
        console.log(err)
    }
})

createController.get('/accessory', (req, res) => {
    res.render('createAccessory')
})

createController.post('/accessory', async (req, res) => {
    try {
        await createAccessory(req.body.name, req.body.description, req.body.imageUrl)
        console.log('new Accessory added')
        res.render('home')
    } catch (err) {
        console.log(err)
    }
})
module.exports = createController
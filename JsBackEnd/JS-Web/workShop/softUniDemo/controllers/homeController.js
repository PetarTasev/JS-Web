const { getAllCubes } = require('../services/cubeServices');

const homeRouter = require('express').Router();

homeRouter.get('/', async (req,res) => {
    const cubes = await getAllCubes()
    
    res.render('home', {
       //cubes 
    })
})

module.exports = homeRouter;
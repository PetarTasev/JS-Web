const { createFacility } = require('../services/facilityService');

const facilityController = require('express').Router();

facilityController.get('/create', (req, res) => {
    res.render('createFacility', {
        title: 'Create New Facility'
    })
})

facilityController.post('/create', async (req, res) => {
    try {
        const result = await createFacility(req.body);
        console.log(result)
    } catch(err) {
        res.render('create', {
            title: 'Request Error',
            error: err.message.split('\n')
        });
    }
})
module.exports = facilityController;
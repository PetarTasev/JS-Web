const detailController = require('express').Router()


detailController.get('/:id', (req, res) => {
    console.log(req.params.id)
    res.render('details')
})



module.exports = detailController
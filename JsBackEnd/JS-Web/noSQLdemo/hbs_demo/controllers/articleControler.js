const articleControler = require('express').Router()

articleControler.get('/', (req, res) => {
    res.render('articles')
} )

 module.exports = articleControler
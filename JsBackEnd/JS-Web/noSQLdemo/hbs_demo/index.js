const express = require('express')
const { startSession } = require('mongoose')
const hbs = require('express-handlebars').create({
    extname: '.hbs'
})
const mongoose = require('mongoose')
const connString = 'mongodb://localhost:27017/testdb0.1'

async function start() {
const app = express()
app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')

app.get('/', (req, res) => {
    res.render('home')
})

mongoose.mongo.connect(connString)

app.listen(3000, () => console.log('Sever listening on port 3000'))
}
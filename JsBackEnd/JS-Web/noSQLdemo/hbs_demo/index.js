const express = require('express')
const { startSession } = require('mongoose')
const hbs = require('express-handlebars').create({
    extname: '.hbs'
})

const mongoose = require('mongoose')
const connString = 'mongodb://localhost:27017/testdb0.1'


const homeControler = require('./controllers/homeController')


start()

async function start() {
const app = express()
app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')

app.use(homeControler)


await mongoose.connect(connString, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

console.log('Data base ready')

app.listen(3000, () => console.log('Sever listening on port 3000'))
}
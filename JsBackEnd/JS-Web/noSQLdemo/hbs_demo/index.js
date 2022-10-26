const express = require('express')
const hbs = require('express-handlebars').create({
    extname: '.hbs'
})

const mongoose = require('mongoose')
const articleControler = require('./controllers/articleControler')
const homeControler = require('./controllers/homeController')

const connString = 'mongodb://localhost:27017'


start()

async function start() {
    const app = express()
    app.engine('.hbs', hbs.engine)
    app.set('view engine', '.hbs')

    app.use(homeControler)
    app.use('/articles', articleControler)

    // await mongoose.connect(connString, {
    //     useUnifiedTopology: true,
    //     useNewUrlParser: true
    // })
    console.log('Data base ready')

    app.listen(3000, () => console.log('Server listening on port 3000'))

}

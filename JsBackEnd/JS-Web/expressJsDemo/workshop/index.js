const express = require('express')
const hbs = require('express-handlebars').create({
    extname: '.hbs'
})

const defaultTitle = require('./midleware/defaultTitle')
const homeController = require('./controlers/homeControler')
const defaultController = require('./controlers/defaultController')
const catalogController = require('./controlers/catalogController')
const createContorler = require('./controlers/createController')

const app = express()

app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')


app.use(express.urlencoded({ extended: true}))
app.use('/static', express.static('static'))
app.use(defaultTitle('SoftUni Accomodation'))

app.use(homeController)
app.use('/catalog',catalogController)
app.use( createContorler)

app.all('*', defaultController)

app.listen(3000, () => console.log('Server listening on port 3000'))


const express = require('express')
const hbs = require('express-handlebars').create({
    extname: '.hbs'
})

const homeController = require('./controlers/homeControler')
const defaultController = require('./controlers/defaultController')

const app = express()

app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')


app.use(express.urlencoded({ extended: true}))
app.use('/static', express.static('static'))

app.use(homeController)



app.all('*', defaultController)

app.listen(3000, () => console.log('Server listening on port 3000'))


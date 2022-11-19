const express = require('express')
const hbs = require('express-handlebars')
const handlebars = hbs.create({
    extname: '.hbs'
})

const app = express()

app.engine('.hbs', handlebars.engine)
app.set('view engine', '.hbs')

app.get('/', (req, res) => {
    res.send('ok')
})


app.listen(3000)

/// boiler plate
/* 
const express = require('express')
const hbs = require('express-handlebars')
const handlebars = hbs.create({
    extname: '.hbs'
})

const app = express()

app.engine('.hbs', handlebars.engine)
app.set('view engine', '.hbs')

app.get('/', (req, res) => {
    res.send('ok')
})


app.listen(3000)
 */

// if we need to add info on the template from the midleware then this is done using
// res.locals.NAME : VALUE
// and hbs can red those names with there values with no furtner complications
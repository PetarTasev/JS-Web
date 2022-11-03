const express = require('express')


const app = express()

app.get('/', (req, res) => {
    res.send('Hello there')
})

app.get('/catalog/:objectId', (req, res) => {
    console.log(req.params)
    res.end()
})

app.get('/img', (req, res) => {
    res.sendFile(__dirname + '/IMAGEnAME')
    // dirname is the name of the file you are curently in thus dirname + file name is the exact location of the given file
    res.download(__dirname + '/FILENAME')
    // be using download when opening the given adress you borwser isent trying to interpret the image but imediatly send you a download form
})
app.route('/create')
    .get( (req, res) => {

    })
    .post( (req, res) => {
        res.redirect('/')
        // after the given asigment is done the user will the redirected to the selected page
    })
//adding multiple methods on the same url without the need to chain them separetly and use saving space


// HERE IS THE REAL WAY YOULL BE USING EXPRESS

app.use('FILEEXPORT')

// the file will contail everuthing from the url to the functionalety
const { Router } = require(express)

const router = Router()

router.get('/get', (req, res) => {
    res.send('hello')
})
module.exports = router

// after with the router is required be the main line of code and used accordingly

// or furter more 

app.use('/create', 'createCntroller') 
// and like so there is no need for the adress to be added while adding the routers

// and iff needed to furter develop the url it is as simple as adding the url exprention to the controller file cuz it wil
// just add on the original adress given

app.listen(3000)
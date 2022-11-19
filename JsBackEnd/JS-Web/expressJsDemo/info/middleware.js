
router.post('/',
    (req, res, next) => {
        //middleware
        next() // if you dont call next the midle ware will terminate the action
    }, (req, res) => {

    })

    app.use('/catalog', midleWareFunction(), catalogControler)
    // now youve sent a midle were though all the /catalog/... urls 
    // in the midle ware you can use the req.method and req.url to get the method and the ... part of the url 
    // if eny 

    app.use(middleWareFunction(req, res, next))
    // when app.use is called withough a address your making a global midlewere that will be called 
    // every time
    // when exporting said midleware its good practice to export a function so that i can be called from
    // the main file that way you can add additional variables if needed

    app.use(express.static('fileName'))
    // this allows you to connect your index file with a html and css to in turn syle and customist your page
    // in the file we have index.html and style.css
    // in tern this mean that all the files in this page will be surved to the global document file meigh contain images 
    // other info
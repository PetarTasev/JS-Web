const homeRouter = require("../controllers/homeController");
const ErrorController = require("../controllers/404Controller");
const createController = require("../controllers/createController");
const aboutController = require("../controllers/aboutController");
const detailController = require("../controllers/detailsControler");


module.exports = (app) => {
    app.use(homeRouter)
    app.use('/create', createController)
    app.use('/about', aboutController)
    app.use('/details', detailController)

    app.use('*', ErrorController)
}
const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
const app = require('express')();

async function start (app) {
require('./config/express')(app);
require('./config/routes')(app);
await require('./config/db')(app)
}

start(app)





app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));
const mongodb = require('mongodb')

const connectingString = 'mongodb://127.0.0.1:27017/'

start()


async function start() {
    const connection = new mongodb.MongoClient(connectingString, {
        useUnifiedTopology: true
    })

    await connection.connect()

    console.log('hello')
}
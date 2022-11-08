const mongodb = require('mongodb')

const connectingString = 'mongodb://127.0.0.1:27017/'

const connection = new mongodb.MongoClient(connectingString, {
    useUnifiedTopology: true
})

connection.connect((err, client) => {
    console.log("database connected")
    
})



async function start() {
    const connection = new mongodb.MongoClient(connectingString, {
        useUnifiedTopology: true
    })

    await connection.connect()

    console.log('hello')
}
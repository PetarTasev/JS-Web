const mongoose = require('mongoose')

const person = new mongoose.Schema( {
    name: String,
    age: Number
})

module.exports = mongoose.model("Person", person)
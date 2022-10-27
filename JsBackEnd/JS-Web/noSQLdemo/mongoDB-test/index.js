const mongoose = require('mongoose');
const Person = require('./Person')

mongoose.connect('mongodb://localhost:27017')

const person = new Person({name: 'Petar', age: 19})
person.save().then(() => console.log('person saved'))
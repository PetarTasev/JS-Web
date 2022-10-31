const mongoose = require('mongoose');
const Person = require('./Person.js')


var uri = 'mongodb://localhost:27017/testdb';
var options = {
    user: 'MyDBUser',
    pass: 'QaDeXvG'
  }

  
  mongoose.connect(uri, options, () => {
    console.log('Connected to MongoDB...');
  });

  const person = new Person({name: 'Petar', age: 19})
  person.save().then(() => console.log('person saved'))
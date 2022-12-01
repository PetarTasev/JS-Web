const { Schema, model } = require("mongoose");

const cubeSchema = new Schema({
    name: {type: String, required: true},
    imageUrl: {type: String, required: true},
    description: {type: String, required: true},
    difficultyLevel: {type: String, required: true}
    //Cubes: {type: [Stringf], required: true, ref: 'Accessory' }
})

const Cube = model('Cube', cubeSchema)

module.exports = Cube
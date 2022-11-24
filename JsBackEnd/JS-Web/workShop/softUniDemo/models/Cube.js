const { Schema, model } = require("mongoose");

const cubeSchema = new Schema({
    name: {type: String, required: true},
    imageUrl: {type: String, required: true},
    Description: {type: String, required: true},
    Cubes: {tyep: String, required: true, ref: 'Accessory' }
})

const Cube = module('Cube', cubeSchema)

module.exports = Cube
const Cube = require("../models/Cube");

async function getAllCubes() {
    return Cube.find({}).lean()
}

async function createCube(name, description, imageUrl, difficultyLevel) {
    return await Cube.create({
        name, 
        description,
        imageUrl,
        difficultyLevel
    })
}

module.exports = {
    getAllCubes,
    createCube
}
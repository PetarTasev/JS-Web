const Accessory = require("../models/Accessory");

async function getAllAccessorys() {
    return Accessory.find({})
}

async function createAccessory(name, description, imageUrl) {
    return await Accessory.create({
        name, 
        description,
        imageUrl
    })
}

module.exports = {
    getAllAccessorys,
    createAccessory
}
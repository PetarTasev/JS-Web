const { Schema, model } = require("mongoose");


const AccessoryScema = new Schema( {
    name: {type: String, required: true},
    discription: {type: String, required: true},
    inameUrl: {type: String, required: true, },
    dificultyLevle: {type: Number, required: true, min: 1, max: 6},
    Accessories: {type: [ObjectId], default: [], ref: 'Cube'}
})

const Accessory = model('Accessory', AccessoryScema)

module.exports = Accessory
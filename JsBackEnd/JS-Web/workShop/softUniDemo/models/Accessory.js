const { Schema, model } = require("mongoose");

const accessorySchema = new Schema({
    name: {type: String, required: true},
    imageUrl: {type: String, required: true},
    description: {type: String, required: true}
    //Accessorys: {type: String, required: true, ref: 'Accessory' }
})

const Accessory = model('Accessory', accessorySchema)

module.exports = Accessory
const {Schema, model} = require('mongoose')

const FacitilySchema = new Schema( {
  name: {type: String, required: true},
  facilityUrl: {type: String, }
})

const Facitily =  model('Facitily', FacitilySchema)

module.exports = Facitily
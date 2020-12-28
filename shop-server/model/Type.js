const mongoose = require('mongoose')
const Schema = mongoose.Schema
const typeSchema = {
  id: Schema.Types.ObjectId,
  typeName: String,
  typeId: String,
}

mongoose.model('Type', typeSchema)

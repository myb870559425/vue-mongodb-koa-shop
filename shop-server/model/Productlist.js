const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productListSchema = new Schema({
  // id: Schema.Types.ObjectId,
  // productId: String,
  // productName: String,
  // productType: String,
  // productPrice: String,
  productImg: String,
  productCompany: String,
})
mongoose.model('ProductList', productListSchema)

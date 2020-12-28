const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ProductlistSchema = {
  productId: Schema.Types.ObjectId,
  productNumber: { unique: true, type: String },
  productName: String,
  productType: String,
  productPrice: String,
  productImg: String,
  creatDate: { type: Date, default: Date.now() },
}

mongoose.model('Product', ProductlistSchema)

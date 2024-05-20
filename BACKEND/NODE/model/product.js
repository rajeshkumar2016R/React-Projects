const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema
const blogSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: {type:Number, min:[0,'wrong min value'], max:[50, 'wrong max value'],require:true},
    rating: {type:Number, min:[0,'wrong min value'], max:[5, 'wrong max value'],require:true , default:0},
    brand: String,
    category: String,
    thumbnail: String,
    images: [ String ]
  });
  
  exports.product = mongoose.model('Product', blogSchema);
const fs = require("fs");
const model = require("../model/product");
const Product = model.product;


exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  // product.title = 'Iphone';
  // product.price = 9999;
  // product.rating = 4.5;
  await product.save();
  console.log(product);
  // let err;
  // if (err) {
  //   res.status(400).json(err);
  // } else {
  //   res.status(201).json(req.body);
  // }
};
exports.getAllProducts = async(req, res) => {
  // const product =await Product.find({rating:{$lt:4.5}})
  const product = await Product.find({});
  res.json(product);
};

exports.getProduct = async(req, res) => {
  const id = req.params.id;
   const product =await Product.findById(id)
  res.json(product);
};

exports.replaceProduct = async(req, res) => {
  const id = req.params.id;
  try{
  const product = await Product.findOneAndReplace({_id:id},req.body)
  res.status(201).json(product);
  }
  catch(err){
  res.status(400).json(err);
  }
};

exports.updateProduct = async(req, res) => {
  const id = req.params.id;
  try{
    const product = await Product.findOneAndUpdate({_id:id},req.body)
    res.status(201).json(product);
    }
    catch(err){
    res.status(400).json(err);
    }
};

exports.deleteProduct = async(req, res) => {
  const id = req.params.id;
  try{
    const product = await Product.findOneAndDelete({_id:id})
    res.status(201).json(product);
    }
    catch(err){
    res.status(400).json(err);
    }
};

// exports.createProduct = (req,res) => {
//     console.log(req.body)
//     products.push(req.body)
//     res.json(req.body)
//   }

// exports.getAllProducts = (req, res) => {
//   res.json(products);
// };

// exports.getProduct = (req, res) => {
//   const id = +req.params.id;
//   const product = products.find((p) => p.id === id);
//   res.json(product);
// };

// exports.replaceProduct = (req, res) => {
//   const id = +req.params.id;
//   const productIndex = products.findIndex((p) => p.id === id);
//   products.splice(productIndex, 1, { ...req.body, id: id });
//   res.status(201).json();
// };

// exports.updateProduct = (req, res) => {
//   const id = +req.params.id;
//   const productIndex = products.findIndex((p) => p.id === id);
//   const product = products[productIndex];
//   products.splice(productIndex, 1, { ...product, ...req.body });
//   res.status(201).json();
// };

// exports.deleteProduct = (req, res) => {
//   const id = +req.params.id;
//   const productIndex = products.findIndex((p) => p.id === id);
//   products.splice(productIndex, 1);
//   res.status(201).json();
// };

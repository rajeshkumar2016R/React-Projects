require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const productRouter = require('./routes/product')
const usersRouter = require('./routes/users')

const server = express();

// mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');



// DB connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://rajeshkumarojha:rajeshkumarojha@143@cluster0.7byrvxx.mongodb.net/ecommercedbse')
  console.log("database connected");
}

server.use(cors());
server.use(express.json());
// console.log(process.env)
server.use('/', productRouter.Router)
server.use('/', usersRouter.Router)

server.listen(8080, () => {
  console.log("server started.. ");
});

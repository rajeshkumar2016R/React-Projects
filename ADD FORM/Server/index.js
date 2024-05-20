const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Schema } = mongoose;

const server = express();
server.use(cors());



server.use(express.json());
const blogSchema = new Schema({
  name: String,
  email: String,
  phone: Number,
});

const Model = mongoose.model("user", blogSchema);

server.get("/", async (req, res) => {
  const user = await Model.find();
  res.json({ message: "server is running", success: true, user: user });
});

server.get("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await Model.findById(id);
  res.json({ message: "get one data", success: true, user: user });
});

server.post("/create", async (req, res) => {
  const user = new Model(req.body);
  console.log(user);
  await user.save();
  res.json({ message: "data save successfully", success: true, user: user });
});

server.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const user = await Model.findOneAndReplace({ _id: id }, req.body);
  res.json({ message: "data update successfully", success: true, user: user });
});
// server.put("/update", async(req,res)=>{
//     console.log(req.body)
//     const {id,...rest} = req.body;
//     console.log(rest)

//     const user = await Model.updateOne({_id:id}, rest)
//     res.json({message: "data is update successfully" ,success:true, user:user})

// })

server.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const user = await Model.findOneAndDelete({ _id: id }, req.body);
  res.json({ message: "data Delete successfully", success: true, user: user });
});

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/form");
  console.log("DB connected");
  server.listen(8080, () => {
    console.log("server started...");
  });
}

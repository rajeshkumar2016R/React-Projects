
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const users = data.users;

exports.createusers = (req,res) => {
    console.log(req.body)
    users.push(req.body)
    res.json(req.body)
  }
  
  exports.getAllusers = (req,res)=>{
    res.json(users)
  } 
  
  exports.getusers = (req,res) => {
    const id = +req.params.id;
    const user = users.find(p => p.id === id)
    res.json(user)
  }
  
 exports.replaceusers = (req,res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(p => p.id === id)
    users.splice(userIndex, 1 ,{...req.body,id:id})
    res.status(201).json()
  }
  
exports.updateusers = (req,res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(p => p.id === id)
    const user = users[userIndex]
    users.splice(userIndex, 1 ,{...user,...req.body})
    res.status(201).json()
  }
  
exports.deleteusers = (req,res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(p => p.id === id)
    users.splice(userIndex, 1)
    res.status(201).json()
  }
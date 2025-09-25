const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://vnraji46_db_user:rA25KRKBJ9PNVUBs@cluster0.snc40fx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
const Schema = mongoose.Schema    

const LoginSchema = new Schema({
     username: String,
     password: String,
     role: String,
     status: String,
    
})

var Logindata = mongoose.model('login_tb',LoginSchema) 
module.exports=Logindata;
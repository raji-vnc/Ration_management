const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://vnraji46_db_user:rA25KRKBJ9PNVUBs@cluster0.snc40fx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
const Schema = mongoose.Schema    //schema definition

const kitSchema = new Schema({
    kit_name:{ type: String, required: true },
     kit_items:{ type: Array, required: true },
   
})

var kitdata = mongoose.model('kit_tb',kitSchema) //model creation
module.exports=kitdata;
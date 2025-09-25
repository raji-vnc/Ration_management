const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://vnraji46_db_user:rA25KRKBJ9PNVUBs@cluster0.snc40fx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
const Schema = mongoose.Schema    //schema definition

const subsidySchema = new Schema({
    card_type:{ type: String, required: true },
     card_items:{ type: Array, required: true },
   
})

var subsidydata = mongoose.model('subsidy_tb',subsidySchema) //model creation
module.exports=subsidydata;
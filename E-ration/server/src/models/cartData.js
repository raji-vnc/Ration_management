const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://vnraji46_db_user:rA25KRKBJ9PNVUBs@cluster0.snc40fx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
const Schema = mongoose.Schema    //schema definition

const cartSchema = new Schema({
    login_id:{type:Schema.Types.ObjectId,ref:"login_tb"},
    subsidy_id:{type:Schema.Types.ObjectId,ref:"subsidy_tb"},
    item:{ type: String, required: true }, 
    date:{ type: String, required: true }, 
    qty:{type: String, required: true},  
    price:{ type: String, required: true }, 

})

var cartdata = mongoose.model('cart_tb',cartSchema) //model creation
module.exports=cartdata;
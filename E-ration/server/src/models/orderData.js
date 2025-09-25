const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://vnraji46_db_user:rA25KRKBJ9PNVUBs@cluster0.snc40fx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
const Schema = mongoose.Schema    //schema definition

const orderSchema = new Schema({
    login_id:{type:Schema.Types.ObjectId,ref:"login_tb"} ,
    shop_id:{type:Schema.Types.ObjectId,ref:"ration_shop_tb"} ,
    subsidydata:{type:Array,required: true},
    date:{ type: String, required: true },
    month:{ type: Number, required: true },
    orderstatus:{ type: String, required: true },
    paymentstatus:{type:String,required: true},
    total:{type:String,required: true},
})

var orderdata = mongoose.model('order_tb',orderSchema) //model creation
module.exports=orderdata;
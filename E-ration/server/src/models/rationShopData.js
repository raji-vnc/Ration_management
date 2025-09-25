const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://vnraji46_db_user:rA25KRKBJ9PNVUBs@cluster0.snc40fx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
const Schema = mongoose.Schema    //schema definition

const RationShopSchema = new Schema({
     login_id:{ type: Schema.Types.ObjectId, ref: "login_tb", required: true },
     shop_owner_name:{ type: String, required: true },
     location:{ type: String, required: true },
     phone:{ type: String, required: true },
     email:{ type: String, required: true },
          
      
})

var RationShopdata = mongoose.model('ration_shop_tb',RationShopSchema) //model creation
module.exports=RationShopdata;
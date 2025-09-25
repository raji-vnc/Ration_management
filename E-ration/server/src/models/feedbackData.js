const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://vnraji46_db_user:rA25KRKBJ9PNVUBs@cluster0.snc40fx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
const Schema = mongoose.Schema    //schema definition

const FeedbackSchema = new Schema({
     // login_id:{ type: Schema.Types.ObjectId, ref: "login_tb", required: true },
     name:{ type: String, required: true },
     phone:{ type: String, required: true },
     feedback:{ type: String, required: true },
   
})

var Feedbackdata = mongoose.model('feedback_tb',FeedbackSchema) //model creation
module.exports=Feedbackdata;
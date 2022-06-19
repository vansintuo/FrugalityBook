const mongoose = require("mongoose");
const user = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password:{
    type:String,
    required:true,
  },
  profile:{
    type:String,
    default:'null'
  },
  role:{
    type:String,
    default:'user',
    enum:['user','seller','admin']
  },
  // phone and secret require for only seller
  phoneNumber:{
    type:String,
    default:'null'
  },
  secretPassword:{
    type:String,
    default:'null'
  },
  books:[{type:mongoose.Types.ObjectId,ref:'books'}],
  cart:[{type:mongoose.Types.ObjectId,ref:'books'}],
  feedbacks:Array,
},{timestamps:true});

module.exports = mongoose.model("users", user);

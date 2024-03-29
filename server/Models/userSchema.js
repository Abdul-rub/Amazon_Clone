const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
   
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    maxlength: 10,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  cpassword: {
    type: String,
    required: true,
    minlength: 6,
  },
  token: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  carts: Array
});




const userModel = new mongoose.model("user",userSchema);


module.exports = userModel
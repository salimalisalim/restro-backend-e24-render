const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        minLength:[3, "Full name should have minimum 3 characters"],
        maxLength:[20, "Full name shouldn't exceed 20 characters"],
        required:[true, "Please enter full name"]
    },
    email:{
        type:String,
        required:[true, "Please enter email"],
        unique:true,
        validate:[validator.isEmail, "Please enter a valid email"]
        
    },
    password:{
        type:String,
        required:[true, "Please enter password"],
    }
});


module.exports = mongoose.model('user', userSchema);

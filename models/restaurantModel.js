const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter restaurant name"],
    },
    address:{
        type:String,
        required:[true, "Please enter restaurant address"],
    },
    neighborhood:{
        type:String,
        required:[true, "Please enter restaurant neighborhood"],
    },
    photograph:{
        type:String,
        // required:[true, "Please enter restaurant photograph"],
    }
});


module.exports = mongoose.model("restaurant", restaurantSchema);
const Restaurant = require("../models/restaurantModel");

exports.addRestaurant = async (req,res)=>{

    const {name, address, neighborhood} = req.body;


    const photograph = req.file.path;

    // console.log(req.files);

    try {

        const restaurant = await Restaurant.create({
            name,
            address,
            neighborhood,
            photograph
        })
    
        if(!restaurant){
            return res.status(500).json({
                success:false,
                message:"Restaurant registration failed!",
            })
        }
    
        res.status(201).json({
            success:true,
            message:"Restaurant registration successfully completed!",
            restaurant
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        });
    }


}

exports.getRestaurants = async(req,res)=>{


    try {
        
        const restaurants = await Restaurant.find();

        if(!restaurants){

            return res.status(500).json({
                success:false,
                message:"Restaurants not found!",
            })

        }

        res.status(200).json({
            success:true,
            restaurants
        })


    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        });
    }

}
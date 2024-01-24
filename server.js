const app = require("./app");
const dotenv = require("dotenv");
const databaseConnection = require("./config/databaseConnection");

dotenv.config({path:"./config/config.env"});

//GET, POST, PUT/PATCH, DELETE 
// Middleware >>> req, res 

// Static files >> serve
// app.use("/static",express.static("public"))

// MVC 

// Database connection
databaseConnection();

app.listen(process.env.PORT, function(){

    console.log(`Server is running on port ${process.env.PORT}`);

});
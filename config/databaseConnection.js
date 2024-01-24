const mongoose = require("mongoose");

const databaseConnection = ()=>{
    mongoose.connect(process.env.DB_URI)
    .then((res) => console.log(`Database connected with ${res.connection.host}`))
    .catch((err) => console.log(err.message));
}

module.exports = databaseConnection;
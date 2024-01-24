const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cors({
    credentials:true,
    origin:true,
}));
app.use(express.static("uploads"));

app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(__dirname + "/uploads", express.static(__dirname + "/uploads"));

// function routerLevelMid(req,res,next){
//     console.log("Router Level");
//     next();
// }

function applicationLevelMid(){
    console.log("Application Level Mid invoked");
    // next();
}

applicationLevelMid();

// userRoutes

const userRoutes = require("./routes/userRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");

app.use('/api/v1', userRoutes);
app.use('/api/v1', restaurantRoutes);

//router level
// app.get('/', routerLevelMid, (req,res)=>{

//     res.sendFile(__dirname + '/index.html');

// });

// app.get('/about', (req,res)=>{

//     res.send("This is about page");

// });

// app.get('/contact', (req,res)=>{

//     res.send("This is contact page");

// });

// app.get('/profile', (req,res)=>{

//     res.send("This is profile page");

// });


app.use((err,req,res,next)=>{
    console.log(err.message);
});

module.exports = app;
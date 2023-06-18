const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path');
const connectDB = require('./server/database/connection')



const app = express();


dotenv.config({path:"config.env"})
const PORT = process.env.PORT || 8080

//log requests in the console
app.use(morgan('tiny'));

//mongoDB connection
connectDB();


//parse request to bodyparser
app.use(bodyparser.urlencoded({extended:true}));

//set view engine
app.set("view engine", "ejs")

//load assets
app.use("/css",express.static(path.resolve(__dirname, "assets/css")) )
app.use("/img",express.static(path.resolve(__dirname, "assets/img")) )
app.use("/js",express.static(path.resolve(__dirname, "assets/js")) )

//load routes
app.use('/', require('./server/routes/router'))


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT} `)
});
const express = require('express');
const mongoose  = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();



const port = 8000;


mongoose.connect(process.env.DATABASE, {
}).then(()=>{
    console.log("DB CONNECTED");
}).catch(()=>{
    console.log("App is crashed")
});

//middle wares 
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

const authRoutes = require('./routes/auth');

app.use("/api",authRoutes);

app.get("/",(req,res)=>{
    res.send("Hello there!");
});

app.listen(port,()=>{
    console.log("App is running");
});
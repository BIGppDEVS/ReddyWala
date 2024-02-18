const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
  
const app = express(); 
const PORT = process.env.PORT; 
  
app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error);

    const mongoURI = process.env.MONGO_URI;
    mongoose.connect(mongoURI)
        .then( () => {
            console.log('Connected to the database ')
        })
        .catch( (err) => {
            console.error(`Error connecting to the database. n${err}`);
        })
    } 
); 
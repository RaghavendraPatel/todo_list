// import express framework
const express = require('express');
const path = require('path');
//assign port on which express server runs
const port = 8000;

//import instance of database connection
const db = require('./config/mongoose');
// create instance of express
const app = express();

//setup view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//setup middlewares
app.use(express.urlencoded({
    extended:true
}));
app.use(express.static('assets'));

app.use('/',require('./routes'));

//run the server on port 8000
app.listen(port,(err)=>{
    if(err){
        console.log(`Error Creating the Server:${err}`);
        return;
    }
    console.log(`Express server running on port:${port}`);
})
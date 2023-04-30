const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://0.0.0.0:27017/todo-app');
// mongoose.connect('mongodb://localhost:27017/todo-app');

const db = mongoose.connection;
db.on('error',console.error.bind(console,'Error connecting to the DataBase'));
db.once('open',()=>{
    console.log('Successfully Connected to the DataBase');
});
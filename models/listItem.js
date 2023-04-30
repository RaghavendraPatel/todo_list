const mongoose = require('mongoose');
//create schema for task
const listItemSchema = new mongoose.Schema({
    item:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    dueDate:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }
});

const ListItem = mongoose.model('ListIteam',listItemSchema);
module.exports = ListItem;
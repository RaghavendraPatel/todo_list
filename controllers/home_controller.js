const ListItem = require('../models/listItem');
module.exports.home =(req,res)=>{
    //fetch all the task from data base
    ListItem.find({})
    .then((tasks)=>{
        return res.render('home',{
            title:'TODO LIST',
            list_items:tasks
        });
    })
    .catch((err)=>{
        console.log(`Error fetching from DataBase:${err}`);
    });
}
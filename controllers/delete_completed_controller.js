const ListItem = require('../models/listItem')

module.exports.deleteCompleted = (req,res)=>{
    //find all the task which are marked completed and delete them
    ListItem.deleteMany({completed:true})
    .then(()=>{
        res.redirect('back');
    })
    .catch((err)=>{
        console.log(`Error Deleting from DataBase:${err}`);
    });
}
const ListItem = require('../models/listItem');

module.exports.toggleCheck = (req,res)=>{
    const id = req.query.id;
    let isCompleted;
    //toggle task status
    //if completed is set to true set it to false and vice versa
    ListItem.findById(id)
    .then((item)=>{
        isCompleted = item.completed;

        ListItem.findByIdAndUpdate(id,{$set:{completed:!isCompleted}})
        .then((item)=>{
            res.redirect('back');
        })
        .catch((err)=>{
            console.log(`Error updating the database:${err}`)
        });
        
    })
    .catch((err)=>{
        console.log(`Error Fetching from DataBase:${err}`)
    });
};
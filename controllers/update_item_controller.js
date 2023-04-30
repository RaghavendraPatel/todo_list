const ListItem = require('../models/listItem');

module.exports.updateItem = (req,res)=>{
    const id = req.query.id;
    //fetch data from database and update 
    ListItem.findByIdAndUpdate(id,{$set:{
        item:req.body.item,
        category:req.body.category,
        dueDate:req.body.dueDate
    }})
    .then(()=>{
        console.log('task updated');
        res.redirect('back');
    })
    .catch((err)=>{
        console.log(`Error updating item: ${err}`);
    });
}
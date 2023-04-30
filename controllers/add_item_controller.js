const ListItem = require('../models/listItem')
module.exports.addItem = (req,res)=>{
    // add a new task to the database
    ListItem.create({
        item:req.body.item,
        category:req.body.category,
        dueDate:req.body.dueDate,
    })
    .then((newItem)=>{
        console.log(newItem);
        res.redirect('back');
    })
    .catch((err)=>{
        console.log(`Error adding item: ${err}`);
    });
}
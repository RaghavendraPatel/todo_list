const ListItem = require('../models/listItem');

module.exports.deleteOne = (req,res)=>{
    const id = req.query.id;
    //find task by id and delete it
    ListItem.findByIdAndDelete(id)
    .then((item)=>{
        // console.log(item.completed);
        res.redirect('back');
    })
    .catch((err)=>{
        console.log(`Error deleting item from the database:${err}`)
    });
};
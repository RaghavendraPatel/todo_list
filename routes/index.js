// import express framework
const express = require('express');
// create express router instance
const router = express.Router();

// import all contoller modules
const homeController = require('../controllers/home_controller');
const addItemController = require('../controllers/add_item_controller');
const toggleCheckController = require('../controllers/toggle_check_controller');
const deleteOneController = require('../controllers/delete_one_controller');
const deleteCompletedController = require('../controllers/delete_completed_controller');
const updateItemController = require('../controllers/update_item_controller');

console.log('Router loaded');
// assidn route to different controller modules
router.get('/',homeController.home);
router.post('/add-item',addItemController.addItem);//add new task
router.get('/toggle-check',toggleCheckController.toggleCheck);//mark or unmark task
router.get('/delete-one',deleteOneController.deleteOne);//delete one task
router.get('/delete-completed',deleteCompletedController.deleteCompleted);//delete all marked task
router.post('/update-item',updateItemController.updateItem);//update one task

module.exports = router;
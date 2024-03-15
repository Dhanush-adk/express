const express = require("express");
const controller = require('../controllers/storyController')

const router = express.Router();

// // get /stories
router.get('/',controller.index)

// get /stories/new
router.get('/newEvents',controller.new)

// post /stories
router.post('/',controller.create)

//get /stories/id get stories by id
router.get('/:id',controller.show)

//update /stories/:id/edit update form by id
router.get('/:id/edit',controller.edit)

//update /stories/:id/edit update story identified by id
router.put('/:id',controller.update)

//delete /stories/:id delete existing story by id
router.delete('/:id',controller.delete)

module.exports = router;
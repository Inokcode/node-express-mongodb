const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

//blog routes
router.get('/', blogController.blog_index);

//submit
router.post('/', blogController.blog_create_post);

// New Blog post
router.get('/create', blogController.blog_create_get);

//single blog Item
router.get('/:id', blogController.blog_details);

router.delete('/:id', blogController.blog_delete);

module.exports = router;

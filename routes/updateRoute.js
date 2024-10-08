const express = require('express');
const router = express.Router();
const { updatePost } = require('../controllers/controller');

router.patch('/posts/:id', updatePost);

module.exports = router;

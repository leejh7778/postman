const express = require('express');
const router = express.Router();
const { deletePost } = require('../controllers/controller');

router.delete('/posts/:id', deletePost);

module.exports = router;

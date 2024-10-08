const express = require('express');
const router = express.Router();
const { createPost } = require('../controllers/controller');

router.post('/posts', createPost);

module.exports = router;

const express = require('express');
const router = express.Router();
const { getAllPosts, getPostById } = require('../controllers/controller');

router.get('/posts', getAllPosts);

router.get('/posts/:id', getPostById);

module.exports = router;

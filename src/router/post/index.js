const router = require('express').Router();
const postCtrl = require('./post.ctrl');

router.post('/post', postCtrl.post);
router.post('/like', postCtrl.like);

module.exports = router;
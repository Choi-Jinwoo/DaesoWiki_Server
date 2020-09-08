const router = require('express').Router();
const postCtrl = require('./post.ctrl');

router.post('/', postCtrl.post);
router.get('/', postCtrl.postget);
router.post('/like', postCtrl.like);

module.exports = router;
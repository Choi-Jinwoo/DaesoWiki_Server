const router = require('express').Router();
const authCtrl = require('./auth.ctrl');

router.get('/login', authCtrl.login);

export default router;

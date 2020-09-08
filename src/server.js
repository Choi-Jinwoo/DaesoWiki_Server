const express = require("express");
const login = require('./app');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const router = express.Router();

// router
router.post('/register', login.register);
router.post('/login', login.login)

app.use('/api', router);

app.listen(8080);
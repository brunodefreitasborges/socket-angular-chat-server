const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController')

router.get('/', auth, (req, res) => {
    res.send('This is the messages route')
});

module.exports = router;
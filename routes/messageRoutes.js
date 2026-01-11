const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware/auth');

router.get('/new', ensureAuthenticated, (req,res) => {
    res.render('new-message');
})

module.exports = router;
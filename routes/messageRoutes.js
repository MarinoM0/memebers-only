const express = require('express');
const router = express.Router();
const { ensureAuthenticated, ensureAdmin } = require('../middleware/auth');
const  messageValidator = require('../validators/messageValidator');
const  messageController = require('../controllers/messageController');


router.get('/new', ensureAuthenticated, messageController.getNewMessage);
router.post('/', ensureAuthenticated, messageValidator, messageController.postNewMessage);
router.post('/:id/delete', ensureAuthenticated, ensureAdmin, messageController.deleteMessage);

module.exports = router;
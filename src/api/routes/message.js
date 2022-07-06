const express = require('express');
const { getMessages, sendMessage } = require('../controllers/messages');

const router = express.Router();

router.get('/messages', getMessages);
router.post('/send', sendMessage);

module.exports = router;

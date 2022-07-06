const express = require('express');
const {
  login,
  signUp,
  validateUser,
  specialLogin,
  resetPassword,
  changePassword,
  contactUs,
} = require('../controllers/auth');

const router = express.Router();

router.post('/login', login);
router.post('/sign-up', signUp);
router.post('/validate-user', validateUser);
router.post('/special-login', specialLogin);
router.post('/reset-password', resetPassword);
router.post('/change-password', changePassword);
router.post('/contact-us', contactUs);

module.exports = router;

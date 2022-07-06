const nodeMailer = require('nodemailer');
const { sendValidation, sendResetLink } = require('./view');

const transporter = nodeMailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 587,
  auth: {
    user: process.env.USER,
    pass: process.env.USER_PASSWORD,
  },
});

module.exports.sendValidationEmail = (email, validation) => {
  const mailOptions = {
    to: email,
    subject: 'Email Validation',
    html: sendValidation(validation._id),
  };
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent!');
    }
  });
};

module.exports.sendResetLink = (email, id) => {
  const mailOptions = {
    to: email,
    subject: 'Reset password instructions ',
    html: sendResetLink(email, id),
  };
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent!');
    }
  });
};

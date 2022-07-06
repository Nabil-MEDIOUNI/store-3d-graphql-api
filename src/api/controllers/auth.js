const bcrypt = require('bcrypt');
const uuidv1 = require('uuid');
const { toLower } = require('lodash');

const { sendValidationEmail } = require('../../helpers/sendEmail');
const generateAccessToken = require('../../helpers/others/generateAccessToken');
const { sendResetLink } = require('../../helpers/sendEmail');

const User = require('../../models/user');
const Contact = require('../../models/contact');
const Requests = require('../../models/passwordRequest');
const userValidation = require('../../models/userValidation');

exports.contactUs = async (req, res) => {
  const newContact = Contact.create({
    ...req.body,
  });

  if (!newContact) {
    return res.status(403).json({
      error: 'Something went wrong!',
    });
  }

  res.json(newContact);
};

exports.signUp = async (req, res) => {
  const { email, password, first_name, last_name } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(403).json({
      error: 'Email is taken!',
    });
  }

  const hashedpassword = await bcrypt.hash(password, 10);

  const user = await new User(req.body);
  user.password = hashedpassword;

  user.full_name = `${first_name} ${last_name}`;
  user.cover_photo.url = `https://cdn-expa.aiesec.org/gis-img/missing_profile_${first_name
    .charAt(0)
    .toLowerCase()}.svg`;
  await user.save();

  const validation = await userValidation.create({ email });

  sendValidationEmail(email, validation);

  res
    .status(200)
    .json({ message: 'Signup success! Please login.', validation });
};

exports.validateUser = async (req, res) => {
  const getRequest = await userValidation.findOne({
    email: req.body.email,
    _id: req.body._id,
  });

  if (getRequest) {
    const user = await User.findOne({ email: req.body.email });
    if (user.is_verified) {
      return res.status(403).json({
        error: 'user is already valid',
      });
    }
    user.is_verified = true;
    user.save();
    res.json({ message: 'User is now valid!' });
  }
};

exports.login = async (req, res) => {
  const { email, password, remember } = req.body;
  const lowerEmail = toLower(email).replace(/\s/g, '');

  const getUser = await User.findOne({ email: lowerEmail }).select(
    'id email password is_verified is_deleted',
  );

  if (!getUser || getUser.is_deleted) {
    return res.status(403).json({
      error: 'No user with that email!',
    });
  }

  const valid = await bcrypt.compare(password, getUser.password);
  if (!valid) {
    return res.status(403).json({
      error: 'Incorrect password!',
    });
  }

  // if (!getUser.is_verified) {
  //   return res.status(403).json({
  //     error: "Your account is not verified!",
  //   });
  // }

  const maxAge = remember ? '1y' : '12h';
  const token = generateAccessToken(getUser, maxAge);

  res.json(token);
};

exports.specialLogin = async (req, res) => {
  const { email } = req.body;
  const lowerEmail = toLower(email).replace(/\s/g, '');

  const getUser = await User.findOne({ email: lowerEmail }).select(
    'id email is_verified is_deleted',
  );

  if (!getUser || getUser.is_deleted) {
    return res.status(403).json({
      error: 'No user with that email!',
    });
  }

  if (!getUser.is_verified) {
    return res.status(403).json({
      error: 'Your account is not verified!',
    });
  }

  const token = generateAccessToken(getUser, '12h');

  res.json(token);
};

exports.resetPassword = async (req, res) => {
  const { email } = req.body;
  const lowerEmail = toLower(email).replace(/\s/g, '');

  const thisUser = await User.findOne({ email: lowerEmail });

  if (!thisUser || thisUser.is_deleted) {
    return res.status(403).json({
      error: 'No user with that email!',
    });
  }

  const id = uuidv1.v1();
  const request = {
    id,
    email: thisUser.email,
  };
  Requests.create(request);
  sendResetLink(thisUser.email, id);

  res.json(request);
};

exports.changePassword = async (req, res) => {
  const { email, password, id } = req.body;
  const lowerEmail = toLower(email).replace(/\s/g, '');
  const getRequest = await Requests.findOne({ email: lowerEmail, id });

  if (getRequest) {
    const user = await User.findOne({ email: lowerEmail });
    user.password = await bcrypt.hash(password, 10);
    user.save();

    res.json(user);
  }
};

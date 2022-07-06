const isAuth = require('../../../middleware/is-auth');
const ConnectedUser = require('../../../models/connected_user');

module.exports.ConnectedUsersQueries = {
  connectedUsers: (_, args, { req }) => ConnectedUser.find().populate('connected.user'),
};

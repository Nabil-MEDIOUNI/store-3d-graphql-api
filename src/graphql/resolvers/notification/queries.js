const isAuth = require('../../../middleware/is-auth');
const Notification = require('../../../models/notification');
const User = require('../../../models/user');

module.exports.NotificationQueries = {
  neverSeenNotifications: async (_, args, { req }) => {
    const user = await User.findById(isAuth(req));
    const isAdmin = user.is_admin;

    const notifications = await Notification.find({})
      .populate('notified_by')
      .populate('seen_by._id')
      .populate('deleted_by._id');

    const NEVER_SEEN = notifications.filter(
      ({ seen_by }) => !seen_by.includes(isAuth(req)),
    );

    const NOT_DELETED = NEVER_SEEN.filter(
      ({ deleted_by }) => !deleted_by.includes(isAuth(req)),
    );

    if (isAdmin) {
      return NOT_DELETED.filter(
        ({ notified_to }) => notified_to.can_view === 'admin' || notified_to.can_view === 'anyone',
      ).reverse();
    }

    return NOT_DELETED.filter(
      ({ notified_to }) => notified_to.can_view === 'anyone',
    ).reverse();
  },

  allNotifications: async (_, args, { req }) => {
    const user = await User.findById(isAuth(req));
    const isAdmin = user.is_admin;
    const notifications = await Notification.find({})
      .populate('notified_by')
      .populate('seen_by')
      .populate('deleted_by._id');

    const NOT_DELETED = notifications.filter(
      ({ deleted_by }) => !deleted_by.includes(isAuth(req)),
    );

    if (isAdmin) {
      return NOT_DELETED.filter(
        ({ notified_to }) => notified_to.can_view === 'admin' || notified_to.can_view === 'anyone',
      ).reverse();
    }

    return NOT_DELETED.filter(
      ({ notified_to }) => notified_to.can_view === 'anyone',
    ).reverse();
  },

  getNotification: (_, { id }) => Notification.findById(id).populate('notified_by').populate('seen_by'),
};

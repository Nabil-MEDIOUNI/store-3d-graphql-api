const { getArgumentInput } = require('../../../helpers/workWithObjects');
const isAuth = require('../../../middleware/is-auth');
const Notification = require('../../../models/notification');

module.exports.NotificationMutations = {
  sendNotification: async (_, { notification }) => {
    const newNotification = await new Notification({
      ...getArgumentInput(notification),
    }).save();

    return newNotification;
  },

  seeNotification: async (_, { id }, { req }) => {
    const notification = await Notification.findById(id).populate('seen_by');
    const DEJA_VU = notification.seen_by.find(({ id }) => id === isAuth(req));

    if (!DEJA_VU) {
      notification.seen_by.push(isAuth(req));
      notification.save();
    }

    return notification;
  },

  deleteNotification: async (_, { id }, { req }) => {
    const notification = await Notification.findById(id).populate('deleted_by');
    const ALREADY_DELETED = notification.deleted_by.find(
      ({ id }) => id === isAuth(req),
    );

    if (!ALREADY_DELETED) {
      notification.deleted_by.push(isAuth(req));
      notification.save();
    }

    return notification;
  },

  deleteMultipleNotifications: async (_, { ids }, { req }) => {
    const notifications = await Notification.find({}).populate('deleted_by');
    const tab = [];

    for (let i = 0; i < notifications.length; i++) {
      for (let j = 0; j < notifications[i].deleted_by.length; j++) {
        tab.push(notifications[i].id);
      }
    }

    for (let i = 0; i < ids.length; i++) {
      tab.push(ids[i]);
    }

    for (let i = 0; i < tab.length; i++) {
      const getNotification = await Notification.findById(tab[i]);
      getNotification.deleted_by.push(isAuth(req));
      getNotification.save();
    }
  },
};

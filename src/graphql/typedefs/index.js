const { allTypeDefs } = require('./allTypeDefs');
const { PersonType } = require('./schema/personTypes');
const { PasswordRequest } = require('./schema/passwordRequest');
const { NotificationType } = require('./schema/notificationType');
const { DeviceType } = require('./schema/deviceTypes');
const { ConnectedType } = require('./schema/connectedTypes');

const typedef = [
  PersonType,
  ConnectedType,
  NotificationType,
  DeviceType,
  NotificationType,
  PasswordRequest,
  allTypeDefs,
];

module.exports = typedef;

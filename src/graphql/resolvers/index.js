const { CurrentPersonQueries } = require('./currentPerson/queries');
const { CurrentPersonMutations } = require('./currentPerson/mutations');

const { NotificationQueries } = require('./notification/queries');
const { NotificationMutations } = require('./notification/mutations');

const { DeviceQueries } = require('./device/queries');
const { DeviceMutations } = require('./device/mutations');

const { PersonQueries } = require('./person/queries');
const { PersonMutations } = require('./person/mutations');

const { ConnectedUsersQueries } = require('./connectedUser/queries');
const { ConnectedUserMutations } = require('./connectedUser/mutations');

const resolvers = {
  Query: {
    ...ConnectedUsersQueries,
    ...CurrentPersonQueries,
    ...PersonQueries,
    ...NotificationQueries,
    ...DeviceQueries,
  },
  Mutation: {
    ...ConnectedUserMutations,
    ...PersonMutations,
    ...CurrentPersonMutations,
    ...NotificationMutations,
    ...DeviceMutations,
  },
};

module.exports = resolvers;

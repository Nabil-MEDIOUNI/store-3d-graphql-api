const ConnectedUser = require('../../../models/connected_user');
const { getArgumentInput } = require('../../../helpers/workWithObjects');

module.exports.ConnectedUserMutations = {
  connecteduserUpdate: async (_, { user }) => {
    const allusers = await ConnectedUser.find({}).populate('connected.user');
    const userInput = getArgumentInput(user);
    const UserIsConnected = allusers[0].connected.filter(({ user }) => user.id === userInput.id);

    if (!allusers[0].connected || UserIsConnected.length === 0) {
      await allusers[0].connected.push({ user: userInput.id });
    }

    await allusers[0].save();

    return [];
  },

  deconnecteduser: async (_, { user }) => {
    const allusers = await ConnectedUser.find().populate('connected.user');

    for (let i = 0; i < allusers[0].connected.length; i++) {
      if (allusers[0].connected[i].user.id === getArgumentInput(user).id) {
        allusers[0].connected.splice(i, 1);
      }
    }

    allusers[0].save();

    return [];
  },
};

const User = require('../../../models/user');
const isAuth = require('../../../middleware/is-auth');

module.exports.PersonQueries = {
  getPerson: (_, { id }) => User.findById(id),
  allPeople: async (_, args, { req }) => {
    const allPeople = await User.find({});
    const allPeopleButMe = allPeople.filter(({id}) => id !== isAuth(req));
    
    return allPeopleButMe;
  },
};

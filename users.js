const users = [];

const addUser = (user, camera) => {
  const userExist = users.find((userr) => userr.user.id === user.id);
  if (!userExist) {
    users.push({ user, camera });
  }

  return { users };
};

const removeUser = (user) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].user.id === user.id) {
      users.splice(i, 1);
    }
  }
  return users;
};

const updateeUser = (user, camera) => {
  const userExist = users.find((singleUser) => singleUser.user.id === user.id);
  if (userExist) {
    userExist.camera = camera;
  } else {
    users.push({ user, camera });
  }

  return { users };
};

const getUser = () => users;

module.exports = {
  addUser,
  removeUser,
  getUser,
  updateeUser,
};

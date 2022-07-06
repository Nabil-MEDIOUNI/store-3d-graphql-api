/* eslint-disable camelcase */
const { toLower } = require('lodash');
const cloudinary = require('cloudinary');

const User = require('../../../models/user');
const { getArgumentInput } = require('../../../helpers/workWithObjects');

module.exports.PersonMutations = {
  updatePerson: async (_, { id, person }) => {
    const {
      email,
    } = getArgumentInput(person);
    const user = await User.findById(id);
    const lowerEmail = toLower(email).replace(/\s/g, '');

    User.findByIdAndUpdate(
      id,
      {
        $set: {
          ...getArgumentInput(person),
          email: lowerEmail,
        },
      },
      { new: true },
    ).exec(async (err) => {
      if (err) throw new Error(err);
      return user;
    });
  },

  deletePerson: async (_, { id }) => {
    const deletedPerson = await User.findByIdAndDelete(id);

    if (deletedPerson.cover_photo.public_id) {
      await cloudinary.uploader.destroy(deletedPerson.cover_photo.public_id, async (result) => result);
    }

    return deletedPerson;
  },

  deleteMultiplePeople: async (_, { ids }) => {
    await User.deleteMany(
      {
        _id: {
          $in: ids,
        },
      },
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      },
    );
    return User.find({});
  },
};

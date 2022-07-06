const mongoose = require('mongoose');

const { Schema } = mongoose;

const ConnectedUserSchema = new Schema(
  {
    connected: [{
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      values: {
        posX: { type: Number },
        posY: { type: Number },
        posZ: { type: Number },
      },
    },
    ],

  },
  { timestamps: true },
);

module.exports = mongoose.model('ConnectedUser', ConnectedUserSchema);

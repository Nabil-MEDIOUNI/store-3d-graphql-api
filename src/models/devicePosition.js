const mongoose = require('mongoose');

const { Schema } = mongoose;

const DevicePositionSchema = new Schema(
  {
    name: { type: String },
    values: {
      posX: { type: Number },
      posY: { type: Number },
      posZ: { type: Number },
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('DevicePosition', DevicePositionSchema);

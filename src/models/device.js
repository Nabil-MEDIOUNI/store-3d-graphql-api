const mongoose = require('mongoose');

const { Schema } = mongoose;

const DeviceSchema = new Schema(
  {
    deviceId: {
      id: { type: String },
      entityType: { type: String },
      credentialsType: { type: String, default: 'ACCESS_TOKEN' },
      credentialsId: { type: String },
    },
    additionalInfo: {
      description: { type: String },
    },
    temperature: {
      ts: { type: String },
      value: { type: String },
    },
    humidity: {
      ts: { type: String },
      value: { type: String },
    },
    pressure: {
      ts: { type: String },
      value: { type: String },
    },
    battery: {
      ts: { type: String },
      value: { type: String },
    },
    customerId: {
      entityType: { type: String },
      id: { type: String },
    },
    name: { type: String },
    type: { type: String },
    visits: { type: Number, default: 0 },
    top_temperature: [
      {
        ts: { type: Number },
        value: { type: String },
      },
    ],
    position: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'DevicePosition',
    },
    label: { type: String, default: null },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Device', DeviceSchema);

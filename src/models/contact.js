const mongoose = require('mongoose');

const { Schema } = mongoose;

const ContactSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    phone: { type: Number },
    message: { type: String },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Contact', ContactSchema);

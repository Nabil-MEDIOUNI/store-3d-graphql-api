const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    full_name: {
      type: String,
    },
    visits: { type: Number, default: 0 },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    postal_code: {
      type: Number,
    },
    cover_photo: {
      url: { type: String },
      public_id: { type: String },
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    is_admin: {
      type: Boolean,
      default: false,
    },
    is_verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);

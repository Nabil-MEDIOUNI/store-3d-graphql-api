const mongoose = require('mongoose');

const { Schema } = mongoose;

const MessageSchema = new Schema({
  text: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('MessageModel', MessageSchema);

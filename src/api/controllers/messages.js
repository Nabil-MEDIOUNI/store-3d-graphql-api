const MessageModel = require('../../models/message');

const getMessages = (req, res, next) => {
  MessageModel.find({})
    .populate('user')
    .sort({ date: 'asc' })
    .exec((err, messages) => {
      if (err) return next(err);
      res.json(messages);
    });
};

const sendMessage = (req, res, next) => {
  const { user, text, date } = req.body;
  if (!user || !date) {
    return res.send({ error: 'missing params in request' });
  }

  const message = new MessageModel({
    text,
  });

  message.user = user.id;

  message.save((err) => {
    if (err) return next(err);
    res.json(message);
  });
};

module.exports = {
  getMessages,
  sendMessage,
};

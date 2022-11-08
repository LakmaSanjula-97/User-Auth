const Message = require("../models/Message.Model");


// const saveMessage = async (req, res) => {
//     if (req.body) {
//         const message = new Message(req.body);
//         await message.save().then((data) => res.status(200).send({ data: data }))
//         .catch((err) => res.status(200).send(err));
//     }
// };

const saveMessage = async (req, res) => {
  if (req.body) {
    const message = new Message(req.body);
    message.writerName = req.body.writerName;
    message.date = req.body.date;
    message.description = req.body.description;
    await message
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

module.exports = {
  saveMessage,
};

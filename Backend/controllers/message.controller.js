const Message = require("../models/Message.Model");
const asyncHandler = require("express-async-handler");


// const saveMessage = async (req, res) => {
//     if (req.body) {
//         const message = new Message(req.body);
//         await message.save().then((data) => res.status(200).send({ data: data }))
//         .catch((err) => res.status(200).send(err));
//     }
// };

const saveMessage = asyncHandler(async (req, res) => {
  const {writerName, date, description} = req.body

  const mesg = new Message({
    user: req.user._id,
    writerName,
    date,
    description
  })

  const createMsg = await mesg.save()

  res.status(201).json(createMsg);
})

// const saveMessage = async (req, res) => {
//   if (req.body) {
//     const message = new Message(req.body);
//     user = req.user._id;
//     writerName = req.body.writerName;
//     date = req.body.date;
//     description = req.body.description;
//     await message
//       .save()
//       .then((data) => {
//         res.status(200).send({ data: data });
//       })
//       .catch((error) => {
//         res.status(500).send({ error: error.message });
//       });
//   }
// };

module.exports = {
  saveMessage,
};

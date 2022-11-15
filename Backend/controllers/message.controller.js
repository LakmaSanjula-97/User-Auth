const Message = require("../models/Message.Model");
const asyncHandler = require("express-async-handler");


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



module.exports = {
  saveMessage,
};

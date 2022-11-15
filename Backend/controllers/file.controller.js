const File = require("../models/File.Model");
const asyncHandler = require("express-async-handler");


const uploadFile = asyncHandler(async (req, res) => {
  const {title, doc} = req.body

  const fil = new File({
    user: req.user._id,
    title,
    doc
  })

  const createDoc = await fil.save()

  res.status(201).json(createDoc);
})


module.exports = {
  uploadFile,
};

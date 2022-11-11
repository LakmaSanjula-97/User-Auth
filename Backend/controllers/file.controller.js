const File = require("../models/File.Model");
const asyncHandler = require("express-async-handler");

// const saveMessage = async (req, res) => {
//     if (req.body) {
//         const message = new Message(req.body);
//         await message.save().then((data) => res.status(200).send({ data: data }))
//         .catch((err) => res.status(200).send(err));
//     }
// };

// const uploadFile = async (req, res) => {
//   if (req.body) {
//     const file = new File(req.body);
//     file.title = req.body.title;
//     file.doc = req.body.doc;
//     await file
//       .save()
//       .then((data) => {
//         res.status(200).send({ data: data });
//       })
//       .catch((error) => {
//         res.status(500).send({ error: error.message });
//       });
//   }
// };

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

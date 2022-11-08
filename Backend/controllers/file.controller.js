const File = require("../models/File.Model");

// const saveMessage = async (req, res) => {
//     if (req.body) {
//         const message = new Message(req.body);
//         await message.save().then((data) => res.status(200).send({ data: data }))
//         .catch((err) => res.status(200).send(err));
//     }
// };

const uploadFile = async (req, res) => {
  if (req.body) {
    const file = new File(req.body);
    file.title = req.body.title;
    file.doc = req.body.doc;
    await file
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
  uploadFile,
};

const File = require("../models/File.Model");
const asyncHandler = require("express-async-handler");
const crypto = require ("crypto");
const algorithm = "aes-256-cbc"; 


const uploadFile = asyncHandler(async (req, res) => {
  const initVector = crypto.randomBytes(16);
  // secret key generate 32 bytes of random data
  const Securitykey = crypto.randomBytes(32);
  const { title, doc } = req.body
  const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

  let encryptedData = cipher.update(doc, "utf-8", "hex");

  const base64dataSecuritykey = Buffer.from(Securitykey, 'binary').toString('base64');
    // convert the initialization vector to base64 string
  const base64dataInitVector = Buffer.from(initVector, 'binary').toString('base64');

  encryptedData += cipher.final("hex");
  const fil = new File({
    user: req.user._id,
    title,
    fileSecurityKey:base64dataSecuritykey,
    fileInitVector:base64dataInitVector,
    doc:encryptedData
  })

  const createDoc = await fil.save()

  res.status(201).json(createDoc);
})


module.exports = {
  uploadFile,
};

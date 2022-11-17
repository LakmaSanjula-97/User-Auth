const Message = require("../models/Message.Model");
const asyncHandler = require("express-async-handler");
const crypto = require ("crypto");
const algorithm = "aes-256-cbc"; 


const saveMessage = asyncHandler(async (req, res) => {
  // generate initvector 16 bytes of random data
  const initVector = crypto.randomBytes(16);
  // secret key generate 32 bytes of random data
  const Securitykey = crypto.randomBytes(32);
  const { writerName, date, description, messageSecurityKey, messageInitVector} = req.body
  const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

  let encryptedData = cipher.update(description, "utf-8", "hex");

  const base64dataSecuritykey = Buffer.from(Securitykey, 'binary').toString('base64');
    // convert the initialization vector to base64 string
  const base64dataInitVector = Buffer.from(initVector, 'binary').toString('base64');

  encryptedData += cipher.final("hex");
  const mesg = new Message({
    user: req.user._id,
    writerName,
    date,
    messageSecurityKey:base64dataSecuritykey,
    messageInitVector:base64dataInitVector,
    description: encryptedData
  })

  const createMsg = await mesg.save()
  console.log("encrypt", encryptedData);

  res.status(201).json(createMsg);
})



module.exports = {
  saveMessage,
};

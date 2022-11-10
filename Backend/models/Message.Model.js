const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    user: {
      type:mongoose.Schema.Types.ObjectId, required: true, ref: 'Staff'
    },
    writerName: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//mongodb data table name
const Message = mongoose.model("Message", messageSchema);

module.exports = Message;

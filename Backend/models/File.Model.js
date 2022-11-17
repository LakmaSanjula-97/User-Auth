const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const fileSchema = new Schema(
  {
    user: {
      type:mongoose.Schema.Types.ObjectId, required: true, ref: 'Staff'
    },
    title: { type: String, required: true },
    doc: { type: String, required: true },
    fileSecurityKey : {
      type: String,
      required: true,
      trim: true,
    },
    fileInitVector : {
      type: String,
      required: true, 
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// fileSchema.pre("save", async function (next) {
//   if (!this.isModified) {
//     next();
//   }

//   const salt = await bcrypt.genSalt(10);
//   this.doc = await bcrypt.hash(this.doc, salt);
// });

//mongodb data table name
const File = mongoose.model("File", fileSchema);

module.exports = File;

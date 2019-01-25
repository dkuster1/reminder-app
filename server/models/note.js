const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  content: String,
  timestamp: Number
});

module.exports = mongoose.model("Note", noteSchema);

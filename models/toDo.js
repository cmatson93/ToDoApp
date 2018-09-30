const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toDoSchema = new Schema({
  toDoName: { type: String, required: true },
  isDone: { type: Boolean, required: true, default: false },
  summary: String,
  dateCreated: { type: Date, default: Date.now }
});

const ToDo = mongoose.model("ToDo", toDoSchema);

module.exports = ToDo;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const churchSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  summary: String,
  date: { type: Date, default: Date.now }
});

const Church = mongoose.model("Church", churchSchema);

module.exports = Church;

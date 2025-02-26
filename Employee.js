const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  salary: Number,
});

module.exports = mongoose.model("Employee", EmployeeSchema);

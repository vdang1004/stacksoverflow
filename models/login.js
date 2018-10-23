const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loginSchema = new Schema({
  user: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Login = mongoose.model("Login", loginSchema);

module.exports = Login;

const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true , select: false}
});
module.exports = model("user", userSchema);

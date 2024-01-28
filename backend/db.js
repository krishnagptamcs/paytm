const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://krishnagptamcs:sBg3SjvqghRcsbXH@cluster1.9ybmmah.mongodb.net/"
);

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};

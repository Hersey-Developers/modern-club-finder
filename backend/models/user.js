const mongoose = require("mongoose");

const User = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    forgotTokenPassword: String,
    resetTokenExpiration: Date
});

module.exports = mongoose.model("users", User);
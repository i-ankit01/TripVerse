const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
name: { type: String, required: true },
email: { type: String, required: true, unique: true, lowercase: true },
passwordHash: { type: String, required: true },
role: { type: String, enum: ["tourist", "admin"], default: "tourist" },
createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);

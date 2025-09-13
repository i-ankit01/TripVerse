const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Helper → Generate JWT tokens
function generateTokens(user) {
  const accessToken = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    { id: user._id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "7d" }
  );

  return { accessToken, refreshToken };
}

// ✅ Register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user already exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ success: false, message: "Email already registered" });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ name, email, passwordHash: hashed });
    await user.save();

    const tokens = generateTokens(user);

    res.json({
      success: true,
      message: "User registered successfully",
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
      ...tokens
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ✅ Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ success: false, message: "Invalid email or password" });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(400).json({ success: false, message: "Invalid email or password" });

    const tokens = generateTokens(user);

    res.json({
      success: true,
      message: "Login successful",
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
      ...tokens
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ✅ Refresh Token
router.post("/refresh", (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.status(401).json({ success: false, message: "No refresh token provided" });

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, payload) => {
      if (err) return res.status(403).json({ success: false, message: "Invalid refresh token" });

      const newAccessToken = jwt.sign(
        { id: payload.id },
        process.env.JWT_SECRET,
        { expiresIn: "15m" }
      );

      res.json({ success: true, accessToken: newAccessToken });
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;

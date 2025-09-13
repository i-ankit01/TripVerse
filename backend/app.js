const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());

// allow frontend to call backend
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

// Routes
app.use("/api/auth", authRoutes);

// Start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(" MongoDB connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log(` Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch(err => console.error(" MongoDB connection error:", err));

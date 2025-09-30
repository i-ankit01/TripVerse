import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";


import authRoutes from "./routes/auth.js";
import planTripRoutes from "./routes/plan-trip.js";
import chatBotRoute from "./routes/chatbot.js"
import weatherRoutes from "./routes/weather.js"

const app = express();
app.use(express.json());

// allow frontend to call backend
const allowedOrigins = [
  "http://localhost:5173",           
  "https://trip-verse.netlify.app",
  "https://www.trip-verse.netlify.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));




// Routes
app.use("/api/auth", authRoutes);
app.use("/api/plan-trip", planTripRoutes);
app.use("/api/chatbot", chatBotRoute);
app.use("/api/weather", weatherRoutes);

// Start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(" MongoDB connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log(` Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch(err => console.error(" MongoDB connection error:", err));

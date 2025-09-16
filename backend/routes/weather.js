const express = require("express");
const fetch = require("node-fetch");
require("dotenv").config();

const router = express.Router();

// GET /api/weather/:city
router.get("/:city", async (req, res) => {
  const { city } = req.params;
  const apiKey = process.env.WEATHER_API_KEY;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      return res.status(400).json({ message: "Failed to fetch weather" });
    }

    const data = await response.json();
    res.json({
      city: data.name,
      temperature: data.main.temp,
      condition: data.weather[0].description,
      icon: data.weather[0].icon,
      humidity: data.main.humidity
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;

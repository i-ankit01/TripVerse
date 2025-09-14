import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { GoogleGenAI } from "@google/genai";

const router = express.Router();

// console.log(
//   "Gemini API Key?",
//   process.env.GEMINI_API_KEY ? "Loaded" : "MISSING"
// );
const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

router.post("/", async (req, res) => {
  try {
    const userInput = req.body;
    const prompt = JSON.stringify(userInput)

    // Call Gemini API
    const result = await genAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: {
      systemInstruction: "You are TripVerse AI, trained by TripVerse to answer and help users with tourism queries specially in jharkhand.",
    },
    });

    const aiResponse =
      result?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

    // console.log("AI Response:", aiResponse);

    res.json({ response: aiResponse });
  } catch (error) {
    console.error("Error generating trip plan:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;

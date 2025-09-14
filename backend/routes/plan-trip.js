import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { GoogleGenAI } from "@google/genai";

const router = express.Router();

console.log(
  "Gemini API Key?",
  process.env.GEMINI_API_KEY ? "Loaded" : "MISSING"
);
const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

router.post("/", async (req, res) => {
  try {
    const userInput = req.body;

    const prompt = `
You are a professional AI travel planner.
Input trip request data:
${JSON.stringify(userInput, null, 2)}

RULES:
1. Output strictly in valid JSON, no explanations or extra text.
2. Follow this schema exactly:
{
  "totalCost": {
    "min": number,
    "max": number,
    "currency": "INR"
  },
  "itinerary": [
    {
      "day": number,
      "activities": [string],
      "locations": [string]
    }
  ],
  "recommendations": {
    "hotels": [
      { "name": string, "price": string, "rating": number }
    ],
    "restaurants": [
      { "name": string, "cuisine": string, "price": string }
    ],
    "attractions": [
      { "name": string, "type": string, "duration": string }
    ]
  },
  "transportation": {
    "<mainModeFromInput>": { "estimated": string },  // e.g., train, bus, car, flight
    "local": { "estimated": string }
  }
}

3. Replace <mainModeFromInput> with the user's chosen main transportation method from the input JSON (e.g., "train", "bus", "car", "flight").
4. The number of days in the itinerary must equal the "duration" field from the input JSON.
5. Activities and recommendations must align with budget, travelStyle, interests, and specialRequests.
6. Always return valid, parsable JSON.
`;

    // Call Gemini API
    const result = await genAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const firstCandidate = result.candidates[0];
    const outputText = firstCandidate.content?.parts
      ?.map((p) => p.text)
      .join("\n");

    if (!outputText) throw new Error("No output text found");

    // Extract JSON object
    const jsonMatch = outputText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("No JSON object found");

    res.json(JSON.parse(jsonMatch[0]));
  } catch (error) {
    console.error("Error generating trip plan:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;

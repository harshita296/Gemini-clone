// src/config/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const MODEL_NAME = "gemini-2.5-flash";

async function runChat(prompt) {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  if (!API_KEY) {
    console.error("API key missing");
    return "API key missing";
  }

  const genAI = new GoogleGenerativeAI(API_KEY);

  const model = genAI.getGenerativeModel({
    model: MODEL_NAME,
  });

  const result = await model.generateContent({
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  });

  return result.response.text();
}

export default runChat;

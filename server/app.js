//importing modules
import express from "express";
import cors from "cors";
import gptTransalte from "./lib/translation.js";
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT = 8080;
const prisma = new PrismaClient();

//middlewares
app.use(cors());
app.use(express.json());

//translation route
app.post("/translate", async (req, res) => {
  const { text, sourceLanguage, targetLanguage } = req.body;
  console.log(req.body);

  // check if translation is in DB

  // Return text translated\

  try {
    // first checks if translation is already in DB
    const existingTranslation = await prisma.translation.findFirst({
      where: {
        sourceText: text,
        sourceLanguage: sourceLanguage,
        targetLanguage: targetLanguage,
      },
    });
    if (existingTranslation) {
      // Return existing translated text if it's found in the DB
      return res.json({ translatedText: existingTranslation.translatedText });
    }

    const translatedText = await gptTransalte(
      sourceLanguage,
      targetLanguage,
      text
    );

    // Save the translated text to the database
    await prisma.translation.create({
      data: {
        sourceText: text,
        sourceLanguage: sourceLanguage,
        targetLanguage: targetLanguage,
        translatedText: translatedText,
      },
    });

    res.json({ translatedText });
  } catch (error) {
    console.error("Error calling GPT-3:", error);
    res.status(500).json({ error: "Failed to translate text" });
  }
});

export default app;

// id, date, fromLanguage, toLanguage, textFrom, textTranslated

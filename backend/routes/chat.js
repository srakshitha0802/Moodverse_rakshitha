import express from "express";
import OpenAI from "openai";

const router = express.Router();

function getOpenAI() {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;
  return new OpenAI({ apiKey: key });
}

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message || String(message).trim().length === 0) {
      return res.status(400).json({ error: 'Message required' });
    }

    const openai = getOpenAI();
    // If no API key provided, return a mock supportive reply so the app works offline
    if (!openai) {
      return res.json({
        reply: `Thanks for sharing — I hear you. Can you tell me a bit more about "${String(message).slice(0,200)}"? Remember I'm not a clinician, but I'm here to listen.`
      });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a calm, supportive mental health assistant for Indian youth. Never diagnose. Encourage help if distress is severe."
        },
        { role: "user", content: String(message).slice(0,1000) }
      ]
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (err) {
    console.error('Chat error', err);
    res.status(500).json({ error: "AI error" });
  }
});

export default router;

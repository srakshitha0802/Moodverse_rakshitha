import express from "express";
const router = express.Router();

// Simple in-memory posts store (for prototype only)
const posts = [];

router.get("/", (req, res) => {
  res.json({ posts });
});

// sanitize helper
function sanitize(s){
  if(!s) return '';
  return String(s).replace(/</g,'&lt;').replace(/>/g,'&gt;').slice(0,2000);
}

router.post("/", (req, res) => {
  const { author = 'Anonymous', content } = req.body;
  const clean = sanitize(content);
  if (!clean || clean.trim().length === 0) {
    return res.status(400).json({ error: "Content required" });
  }
  const post = { id: posts.length + 1, author: sanitize(author), content: clean, createdAt: new Date().toISOString() };
  posts.unshift(post);
  res.status(201).json(post);
});

export default router;
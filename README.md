# Moodverse 🌈

India’s AI-Powered Digital Therapy Dost 🇮🇳

## 🚀 About
Moodverse is an AI-driven mental wellness platform designed for Indian youth. 
It combines emotion AI, VR therapy, meme-based engagement, journaling, and 
privacy-first design to deliver accessible and stigma-free mental health support.

## ✨ Features
- AI-powered mood detection (on-device)
- Hinglish therapy chatbot (CBT, DBT, Mindfulness)
- VR therapy rooms (WebXR)
- Bollywood meme therapy
- Journaling & mood tracking
- Anonymous peer support
- 100% privacy-first (offline storage)

## 🛠️ Tech Stack
- React (Vite)
- Tailwind CSS
- face-api.js
- A-Frame (WebXR)
- Chart.js
- Tenor API
- Jitsi Meet API

## 🔒 Privacy
All emotional data is processed locally. No data is stored on servers.

## 📸 Screenshots
(Add screenshots here)

## 🔗 Live Demo
(Add demo link if available)

## 👩‍💻 Author
Rakshitha Semala


Local dev quick start

Frontend
1. cd frontend
2. npm install
3. npm run dev (http://localhost:3000)

Backend
1. cd backend
2. npm install
3. copy `.env.example` to `.env` and add OPENAI_API_KEY if you have one
4. npm run dev (defaults to port 3001)

Notes
- Do NOT commit real API keys. Use `.env` and add it to `.gitignore`.
- If you exposed an API key, revoke and rotate it immediately.

Features implemented
- New homepage layout, media hub, music player
- Chatbot UI with local storage + backend integration
- Community board (simple in-memory posts API)
- VR experience using A-Frame with remote fallback scene
- Vite dev proxy for `/api` to backend
# Moodverse_rakshitha

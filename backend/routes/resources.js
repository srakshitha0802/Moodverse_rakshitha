import express from 'express';
const router = express.Router();

// Basic static resource list (can be extended or stored in DB)
const resources = [
  { id: 1, region: 'India (24/7)', name: 'AASRA', phone: '+91-22-2772-6771', url: 'https://www.aasra.info/' },
  { id: 2, region: 'India (24/7)', name: 'Snehi', phone: '+91-22-2650-9403', url: 'https://www.snehi.org/' },
  { id: 3, region: 'US', name: '988 Lifeline', phone: '988', url: 'https://988lifeline.org/' },
  { id: 4, region: 'International', name: 'Befrienders Worldwide', phone: '', url: 'https://www.befrienders.org/' }
];

router.get('/', (req, res) => {
  res.json({ resources });
});

export default router;
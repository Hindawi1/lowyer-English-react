const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for all origins (you can restrict this to specific origins if needed)
app.use(cors({
  origin: 'http://localhost:3000',  // Replace with your frontend URL if needed
}));

app.get('/api/data', (req, res) => {
  res.json({ message: "Data from the backend" });
});

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});

const express = require("express");
const router = express.Router();

// Dummy user data (Replace with Database later)
const userData = {
  history: [
    { device: "Old Laptop", credits: 50 },
    { device: "Smartphone", credits: 30 }
  ],
  credits: 80
};

// Get user history and credits
router.get("/history", (req, res) => {
  res.json(userData);
});

module.exports = router;

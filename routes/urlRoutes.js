const express = require("express");
const shortid = require("shortid");

const Url = require("../models/Url");
const router = express.Router();

router.post("/shorten", async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        message: "URL is required"
      });
    }

    const shortCode = shortid.generate();

    await Url.create({
      originalUrl: url,
      shortCode
    });

    res.status(201).json({
      shortCode,
      shortUrl: `http://localhost:3000/${shortCode}`
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

router.get("/:code", async (req, res) => {
  try {

    const url = await Url.findOne({
      shortCode: req.params.code
    });

    if (!url) {
      return res.status(404).json({
        message: "URL not found"
      });
    }

    url.clicks += 1;

    await url.save();

    res.redirect(url.originalUrl);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

router.get("/stats/:code", async (req, res) => {
  try {

    const url = await Url.findOne({
      shortCode: req.params.code
    });

    if (!url) {
      return res.status(404).json({
        message: "URL not found"
      });
    }

    res.json({
      originalUrl: url.originalUrl,
      clicks: url.clicks
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;
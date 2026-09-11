const express = require("express");
const { generateCode, patchRegion } = require("../services/llm");

const router = express.Router();

// POST /api/generate -> { route, prompt, images[] } -> { code, components }
router.post("/", async (req, res, next) => {
  try {
    const { route = "/", prompt = "", images = [] } = req.body || {};
    const result = await generateCode({ route, prompt, images });
    res.json(result);
  } catch (err) {
    next(err);
  }
});

// POST /api/generate/patch-region -> { file, region, instruction } -> { patch }
router.post("/patch-region", async (req, res, next) => {
  try {
    const { file = "", region = null, instruction = "" } = req.body || {};
    const result = await patchRegion({ file, region, instruction });
    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

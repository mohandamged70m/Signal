const express = require("express");
const storage = require("../services/storage");

const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.json(storage.listProjects());
  } catch (err) {
    next(err);
  }
});

router.post("/", (req, res, next) => {
  try {
    const project = storage.saveProject(req.body || {});
    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", (req, res, next) => {
  try {
    const project = storage.getProject(req.params.id);
    if (!project) return res.status(404).json({ error: "not found" });
    res.json(project);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

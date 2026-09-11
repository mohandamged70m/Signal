const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "..", "data");
const DB_FILE = path.join(DATA_DIR, "projects.json");

function ensureDb() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DB_FILE)) fs.writeFileSync(DB_FILE, "[]");
}

function readAll() {
  ensureDb();
  return JSON.parse(fs.readFileSync(DB_FILE, "utf8"));
}

function listProjects() {
  return readAll();
}

function saveProject(input) {
  const all = readAll();
  const project = { id: String(Date.now()), createdAt: new Date().toISOString(), ...input };
  all.push(project);
  fs.writeFileSync(DB_FILE, JSON.stringify(all, null, 2));
  return project;
}

function getProject(id) {
  return readAll().find((p) => p.id === id) || null;
}

module.exports = { listProjects, saveProject, getProject };

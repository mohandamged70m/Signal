require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const healthRoutes = require("./routes/health");
const generateRoutes = require("./routes/generate");
const projectRoutes = require("./routes/projects");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 7001;

app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000" }));
app.use(express.json({ limit: "10mb" }));
app.use(morgan("dev"));

app.use("/health", healthRoutes);
app.use("/api/generate", generateRoutes);
app.use("/api/projects", projectRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`signal-backend listening on http://localhost:${PORT}`);
});

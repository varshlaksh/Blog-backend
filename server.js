const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(cors());
app.use(express.json());

// Welcome Route ✅ (must come before app.listen)
app.get("/", (req, res) => {
  res.send("✅ Blog API is running! Use /api/posts to view blog data.");
});

// Routes
const postRoutes = require("./routes/posts");
app.use("/api/posts", postRoutes);

// Start Server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

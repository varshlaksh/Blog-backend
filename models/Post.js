const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: "Anonymous",
    }
  },
  {
    timestamps: true // ⏱️ Adds createdAt & updatedAt automatically
  }
);

module.exports = mongoose.model("Post", PostSchema);

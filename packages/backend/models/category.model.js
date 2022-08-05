const mongoose = require("mongoose");
const category = mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    bookMatch: [{ type: mongoose.Types.ObjectId, ref: "books" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("categories", category);

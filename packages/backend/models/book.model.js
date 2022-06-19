const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: String,
    author: String,
    price: {
      type: Number,
      required: true,
    },
    allImagePaths: { type: Array, requierd: true },
    allImageNames:{type: Array, required: true},
    stock: Number,
    status: String,
    category: String,
    userId: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
  },
  { timestamps: true }
);
const Book = mongoose.model("books", bookSchema);
module.exports = Book;

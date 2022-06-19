const mongoose = require("mongoose");
const status = mongoose.Schema({
  status: {
    type: String,
    required: true,
  },

  bookMatch: { type: mongoose.Schema.Types.ObjectId, ref: "books" },
});

const Status = mongoose.model("statuses", status);
module.exports = Status;

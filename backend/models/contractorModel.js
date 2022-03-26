const mongoose = require("mongoose");

const contractorModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Contractactor = mongoose.model("Contractactor", contractorModel);

module.exports = Contractactor;

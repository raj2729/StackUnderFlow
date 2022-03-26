const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    company: {
        type: String,
        required: true
    },
    contractor: {
      type: String,
      required: true,
    },
    address: {
        x_cord: {
            type: Number
        },
        y_cord: {
            type: Number
        },
        stringAddress: {
            type: String
        }
    },
  },
  {
    timestamps: true,
  }
);


const Project = mongoose.model("Project", projectSchema);

module.exports = Project;

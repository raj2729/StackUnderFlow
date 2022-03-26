const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const workerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      x_cord: {
        type: Number,
      },
      y_cord: {
          type: Number
      },
      stringAddress: {
          type: Number
      },
    },
    adharCard: {
      frontPic: {
        type: String,
      },
      backPic: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

workerSchema.methods.matchPassword = async function (enterredPassword) {
  return await bcrypt.compare(enterredPassword, this.password);
};
// Middleware for password
// pre => before saving the user
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });
// Middleware for hashing password
// pre => before saving the user in the database
workerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(5);
  this.password = await bcrypt.hash(this.password, salt);
});

const Worker = mongoose.model("Worker", workerSchema);

module.exports = Worker;

const express = require("express");

const { makePhoneCall } = require("../controllers/phoneCall");

const router = express.Router();

// Perform a payment
router.route("/makePhoneCall").post(makePhoneCall);

module.exports = router;

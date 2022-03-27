require("dotenv").config();
const asyncHandler = require("express-async-handler");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const makePhoneCall = asyncHandler(async (req, res) => {
  try {
    client.calls
      .create({
        twiml:
          "<Response><Say>This is a reminder call for your today's work. Please reach on time at 9 AM at the construction site at Goregaon, Mumbai. Good bye. Have a nice day.</Say></Response>",
        to: "+917977757495",
        from: "+14582258918",
      })
      .then((call) => console.log(call.sid));

    res.status(200).json({
      success: true,
      data: "Phone Call is made",
    });
  } catch (error) {
    console.log("ERROR ---- ", error);
    res.status(200).json({
      success: false,
      data: "Phone Call is not made",
    });
  }
});

module.exports = {
  makePhoneCall,
};

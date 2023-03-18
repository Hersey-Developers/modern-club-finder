const mongoose = require("mongoose");

const Activity = mongoose.Schema({
    name: { type: String, required: true },
    categories: [
        {
            type: String
        }
    ],
    description: { type: String },
    meetingDays: [
        {
            type: String
        }
    ],
    meetingStartEndTimes: String,
    location: String,
    link: String,
    displayedPublically: Boolean
});

module.exports = mongoose.model("activities", Activity);

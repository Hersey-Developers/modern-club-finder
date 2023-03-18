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

const express = require("express");
const router = express.Router();

const Activity = require("./path/to/Activity");

router.get("/", async (req, res) => {
  try {
    const query = {};
    if (req.query.name) {
      query.name = req.query.name;
    }
    if (req.query.categories) {
      query.categories = { $in: req.query.categories };
    }
    if (req.query.availableDays) {
      query.meetingDays = { $in: req.query.availableDays };
    }
    const activities = await Activity.find(query);
    res.status(200).json(activities);
  } catch (error) {
    console.error(error);
    res.status(400).send("Failed to retrieve activities");
  }
});

router.post("/", async (req, res) => {
  try {
    const activity = new Activity(req.body);
    await activity.save();
    res.status(201).json(activity);
  } catch (error) {
    console.error(error);
    res.status(400).send("Failed to create activity");
  }
});

module.exports = router;
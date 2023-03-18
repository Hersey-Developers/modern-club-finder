// Activity Routes

const Activity = require("../models/activity");
const express = require("express");

const router = express.Router();

// Activities Test Objects in MongoDB:

// 6406ba77f7046e089abb7f12
    // name: "Test"
    // categories: ["Test 1", "Test 2", "Test 3"]
    // description: "Test"
    // meetingDays: ["Monday", "Tuesday"]
    // meetingStartEndTimes: "9:00AM-10:00PM"
    // location: "Hersey"
    // link: "https://www.google.com"
    // displayedPublically: false

// 6406baf375deec242f93ce5f
    // name: "Test 2"
    // categories: ["Test 1", "Test 2", "Test 3"]
    // description: "Test 2"
    // meetingDays: ["Monday", "Tuesday"]
    // meetingStartEndTimes: "9:00AM-10:00PM"
    // location: "Hersey"
    // link: "https://www.google.com"
    // displayedPublically: false
// Get all Activity objects

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
// Get a specific Activity object
router.get("/:activityId", async (req, res, next) => {
    // --- YOUR CODE GOES UNDER THIS LINE --- 
    const activityId = req.params.activityId;

    Activity.findById(activityId)
        .then(activity => {
            if (!activity) {
                const error = new Error('Could not find the activity.');
                error.statusCode = 404;
                throw error;
            }

            res
                .status(200)
                .json({
                    message: 'Activity fetched',
                    activity: activity
                });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
});

// Create a new Activity object

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
  
// Update a specific Activity object
router.patch("/:activityId", async (req, res, next) => {
    // --- YOUR CODE GOES UNDER THIS LINE --- 
    const activityId = req.params.activityId;

    const name = req.body.name;
    const categories = req.body.categories;
    const description = req.body.description;
    const meetingDays = req.body.meetingDays;
    const meetingStartEndTimes = req.body.meetingStartEndTimes;
    const location = req.body.location;
    const link = req.body.link;
    const displayedPublically = req.body.displayedPublically;

    Activity.findById(activityId)
        .then(activity => {
            if (!activity) {
                const error = new Error('Error: Could not find the activity.');
                error.statusCode = 404;
                throw error;
            }

            activity.name = name;
            activity.categories = categories;
            activity.description = description;
            activity.meetingDays = meetingDays;
            activity.meetingStartEndTimes = meetingStartEndTimes;
            activity.location = location;
            activity.link = link;
            activity.displayedPublically = displayedPublically;

            if (activity.name === "") {
                const error = new Error('Please enter a name.');
                error.statusCode = 404;
                throw error;
            }  
            
            if (activity.categories.length === 0) {
                const error = new Error('Please enter at least one category (Empty category array).');
                error.statusCode = 404;
                throw error;
            }

            for(let i = 0; i < activity.categories.length; i++) {
                if (activity.categories[i] === "") {
                    const error = new Error('Please fill each category accordingly (Left a category blank).');
                    error.statusCode = 404;
                    throw error;
                }
            }

            if (activity.description === "") {
                const error = new Error('Please enter a description.');
                error.statusCode = 404;
                throw error;
            }

            if (activity.meetingDays.length === 0) {
                const error = new Error('Please enter at least one meeting day (Empty meeting day array).');
                error.statusCode = 404;
                throw error;
            }

            for(let i = 0; i < activity.meetingDays.length; i++) {
                if (activity.meetingDays[i] === "") {
                    const error = new Error('Please fill each meeting day accordingly (Left a meeting day blank).');
                    error.statusCode = 404;
                    throw error;
                }
            }

            if (activity.meetingStartEndTimes === "") {
                const error = new Error('Please enter the time the meeting starts and ends.');
                error.statusCode = 404;
                throw error;
            }

            if (activity.location === "") {
                const error = new Error('Please enter a location.');
                error.statusCode = 404;
                throw error;
            }

            if (activity.link === "") {
                const error = new Error('Please enter a link.');
                error.statusCode = 404;
                throw error;
            }

            if (activity.displayedPublically !== true && activity.displayedPublically !== false) {
                const error = new Error('Please enter whether or not the activity should be displayed publicly.');
                error.statusCode = 404;
                throw error;
            }

            return activity.save();
        })
        .then(result => {
            res.status(200).json({message: 'Activity Updated', activity: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
});

// Delete a specific Activity object
router.delete("/:activityId", async (req, res, next) => {
    // --- YOUR CODE GOES UNDER THIS LINE --- 
    const activityId = req.params.activityId;

    Activity.findById(activityId)
        .then(activity => {
            if (!activity) {
                const error = new Error('Could not find the activity.');
                error.statusCode = 404;
                throw error;
            }

            return Activity.findByIdAndDelete(activityId);
        })
        .then(result => {
            res.status(200).json({message: 'Deleted Activity'});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
});

module.exports = router;
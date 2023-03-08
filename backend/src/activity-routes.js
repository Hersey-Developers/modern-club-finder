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
    // --- YOUR CODE GOES UNDER THIS LINE --- 

    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
});


// Get a specific Activity object
router.get("/:activityId", async (req, res) => {
    // --- YOUR CODE GOES UNDER THIS LINE --- 

    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
});

// Create a new Activity object
router.post("/", async (req, res) => {
    // --- YOUR CODE GOES UNDER THIS LINE --- 

    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
});

// Update a specific Activity object
router.patch("/:activityId", async (req, res) => {
    // --- YOUR CODE GOES UNDER THIS LINE --- 

    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
});

// Delete a specific Activity object
router.delete("/:activityId", async (req, res) => {
    // --- YOUR CODE GOES UNDER THIS LINE --- 

    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
});

module.exports = router;
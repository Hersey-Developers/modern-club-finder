// Activity Routes

const Activity = require("../models/activity");
const express = require("express");

const router = express.Router();

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
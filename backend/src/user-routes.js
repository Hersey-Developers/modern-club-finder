const User = require('../models/user');
const express = require('express');

const router = express.Router();

<<<<<<< HEAD
// Sign in the user
=======
// Create a new user account
>>>>>>> da4bc4f675e0a883835afeffc1d193c95ec6c84c
router.post("/signup", async (req, res) => {
    // --- YOUR CODE GOES UNDER THIS LINE --- 

    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
});

// Log in the user
router.post("/login", async (req, res) => {
    // --- YOUR CODE GOES UNDER THIS LINE --- 

    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
});

// Log out the user
router.post("/logout", async (req, res) => {
    // --- YOUR CODE GOES UNDER THIS LINE --- 

    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
});

// Send the user a password reset email
router.post("/forgot-password", async (req, res) => {
    // --- YOUR CODE GOES UNDER THIS LINE --- 

    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
});

// Change password of a user after sending the reset email
router.post("/change-password", async (req, res) => {
    // --- YOUR CODE GOES UNDER THIS LINE --- 

    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
});

module.exports = router;
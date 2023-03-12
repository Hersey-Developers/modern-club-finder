const User = require('../models/user');

const express = require('express');

const { validationResult, check } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');
const crypto = require('crypto');

const transporter = nodemailer.createTransport(mailgunTransport({
    auth: {
      api_key: 'API_KEY', // input values
      domain: 'DOMAIN'
    }
  }));

const router = express.Router();

// Create a new user account
router.post("/signup", 
    // pre-function checks
[
    check('email')
    .isEmail().withMessage('Please enter a valid email.')
    .custom(async (value, { req }) => {
        try {
        const user = await User.findOne({ email: value }); // find (possible) user before moving on
        if(user){
            throw new Error('Email already exists. Please choose a different one.');
        }
        } catch (err) {
            throw new Error('Something went wrong.');
        }
    })
    .normalizeEmail()
    .trim(),
    check('password')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long.')
    .matches(/\d/).withMessage('Password must contain at least one number.')
    .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter.')
    .matches(/[^\w\s]/).withMessage('Password must contain at least one non-alphanumeric character.')
    .trim()
],
async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const errors = validationResult(req); // grabs (if any) error from check
    if(!errors.isEmpty()){
        return res.status(422)
        .json({ // send json if error with old input and error message
            errors: errors.array(), 
            oldInput: {email: email, password: password},
            errorMessage: errors.array()[0].msg
        }); 
    }
    bcrypt
    .hash(password, 12)
    .then(passwordHash => {
        const user = new User({
            email: email,
            password: passwordHash,
        });
        return user.save();
        // return res.redirect('/login'); // no login page
    })
    .catch(() => {
        res.status(500).json({
            errorTitle: "500 Server Error",
            errorHeader: "Oops, something went wrong.",
            errorBase: "The server has enountered an error. If the problem persists, please contact us."
        })
    });
});

// Log in the user
router.post("/login", 
[   // pre-function checks
    check('email')
    .isEmail().withMessage('Please enter a valid email.')
    .normalizeEmail(),
    check('password')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long.')
    .trim(),
],
async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422)
        .json({ 
            errors: errors.array(), 
            oldInput: {email: email, password: password},
            errorMessage: errors.array()[0].msg
        }); 
    }
    await User.findOne({ email: email })
        .then(user => {
            if(!user){ // if no user, send back an error
                res.setHeader('WWW-Authenticate', 'Bearer realm="Restricted Area"');
                return res.status(422).json({
                    oldInput: {email: email, password: password},
                    errorMessage: "Email does not exist."
                })
            }
            checkedUser = user;
            return bcrypt.compare(password, user.password) // checks if passwords match then returns result
        })        
        .then(match => {
            if(!match){
                const error = new Error('Incorrect Password.')
                error.statusCode = 401; // not authenticated
                throw error;
            } 
            // else if match, store user and give token
            const jwtToken = jwt.sign( // create jwt signature
            { 
                email: checkedUser.email,
                userId: checkedUser._id.toString()
            }, 'SECRET_KEY_NAME', // input value
            {expiresIn: '1d'}); // input value
            return res.status(200).json({token: jwtToken, userId: checkedUser._id.toString()}); 
        })
        .catch(() => {
            res.status(500).json({
                errorTitle: "500 Server Error",
                errorHeader: "Oops, something went wrong.",
                errorBase: "The server has enountered an error. If the problem persists, please contact us."
            })
        });
});

// Log out the user
router.post("/logout", async (req, res) => {
    try {
        localStorage.removeItem('token');
        return res.status(200).json({ message: "Logged out successfully!"});
    } catch (err) {
        res.status(500).json({
            errorTitle: "500 Server Error",
            errorHeader: "Oops, something went wrong.",
            errorBase: "The server has enountered an error. If the problem persists, please contact us."
        });
    }
});

// Send the user a password reset email
router.post("/forgot-password", async (req, res) => {
    try {
        const buffer = crypto.randomBytes(32);
        const emailToken = buffer.toString('hex'); // create unique token
        const user = await User.findOne({ email: req.body.email })
        if(!user){
            return res.status(422).json({
                oldInput: { email: req.body.email },
                errorMessage: "Email does not exist."
            });
        }
        user.forgotTokenPassword = emailToken;
        user.resetTokenExpiration = Date.now() + 600000; // 10 minute expiration
        await user.save()
        await transporter.sendMail({ // basic styling (for now)
            to: user.email,
            from: 'HSClubFinder@D214.org',
            subject: 'Password Reset',
            html: `
            <p>You requested a password reset</p>
            <p>Click this <a href="INPUT_DOMAIN${emailToken}">link</a> to set a new password.</p>` // Input website
          });
          return res.status(200).json({
            message: "Password reset email has been sent."
          }) 
    } catch(error) {
        res.status(500).json({
            errorTitle: "500 Server Error",
            errorHeader: "Oops, something went wrong.",
            errorBase: "The server has enountered an error. If the problem persists, please contact us."
        })
    };
});


// Change password of a user after sending the reset email
router.post("/change-password", async (req, res) => {
    let resetUser;
    const emailToken = req.params.emailToken;
    const newPassword = req.body.password;
    await User.findOne({
        forgotTokenPassword: emailToken, 
        resetTokenExpiration: {$gt: Date.now()},
    })
        .then(user => {
            resetUser = user;
            return bcrypt.hash(newPassword, 12);
        })
        .then(hashedPassword => {
            resetUser.passwordHash = hashedPassword;
            resetUser.forgotTokenPassword = null;
            resetUser.resetTokenExpiration = undefined;
            return resetUser.save();
        })
        // .then(() => {
        //     res.redirect('/')
        // })
        .catch(() => {
            res.status(500).json({
                errorTitle: "500 Server Error",
                errorHeader: "Oops, something went wrong.",
                errorBase: "The server has enountered an error. If the problem persists, please contact us."
            })
        })
});

module.exports = router;

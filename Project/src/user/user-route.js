const express = require("express");
const router = express.Router();
const userController = require("./controller/user-controller");
const sessionAuth = require("../middlewares/session-auth");

router.get("/login", (req,res) => {
    res.render("user-login", {message: ""});
});

router.get("/register", (req,res) => {
    res.render("user-register", {message: ""});
});

router.post("/login", userController.loginUser);

router.post("/register", userController.registerUser);

router.get("/trending", sessionAuth, (req,res) => {
    res.render("home");
})

module.exports = router;
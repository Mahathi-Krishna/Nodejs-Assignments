const express = require("express");
const router = express.Router();
const userController = require("./controller/user-controller");

router.get("/login", (req,res) => {
    res.render("user-login", {message: ""});
});

router.get("/register", (req,res) => {
    res.render("user-register", {message: ""});
});

router.post("/login", userController.loginUser);

router.post("/register", userController.registerUser);

module.exports = router;
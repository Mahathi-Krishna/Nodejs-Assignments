const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/login", (req,res) => {
    res.render("adminlogin");
});

module.exports = router;
const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin-login");

router.get("/login", (req,res) => {
    res.render("adminlogin");
});

router.post("/login", adminController.verify);

module.exports = router;
const express = require("express");
const router = express.Router();
const adminController = require("./controller/admin-controller");

router.get("/", (req,res) => {
    res.render("admin-home", {user : "", message : ""});
});

router.post("/finduser", adminController.findUser);

router.post("/register", adminController.registerUser);

router.post("/updateuser", adminController.updateUser);

module.exports = router;
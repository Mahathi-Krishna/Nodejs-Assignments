const express = require("express");
const router = express.Router();
const adminController = require("./controller/admin-controller");
const newsController = require("../news/controller/news-controller");

router.get("/", (req,res) => {
    res.render("admin-home", {user : "", message : ""});
});

router.post("/finduser", adminController.findUser);

router.post("/register", adminController.registerUser);

router.post("/updateuser", adminController.updateUser);

router.get("/addnews", (req,res) => {
    res.render("admin-addnews", {message : ""});
});

router.post("/addnews", newsController.addNews);

module.exports = router;
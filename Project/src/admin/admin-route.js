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

router.get("/editnews", newsController.allNews);

router.post("/editnews", (req,res) => {
    console.log("Post-Edit");
    console.log(req.body);
});

router.post("/deletenews", (req,res) => {
    console.log("Post-Delete");
    console.log(req.body);
});

module.exports = router;
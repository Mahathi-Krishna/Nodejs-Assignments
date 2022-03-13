const express = require("express");
const router = express.Router();
const adminController = require("./controller/admin-controller");
const newsController = require("../news/controller/news-controller");
const bodyparser = require("body-parser");

router.use(bodyparser.json());

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
    var data = req.body;

    console.log(data.created);
});

router.post("/deletenews", (req,res) => {
    console.log("Post-Delete");
    console.log(req.body);
});

module.exports = router;
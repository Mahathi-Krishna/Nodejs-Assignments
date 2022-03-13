const express = require("express");
const router = express.Router();
const adminController = require("./controller/admin-controller");
const newsController = require("../news/controller/news-controller");
const bodyparser = require("body-parser");

router.use(bodyparser.urlencoded({extended: false}));

router.get("/", (req,res) => {
    res.render("admin-home", {user : "", message : ""});
});

router.post("/finduser", adminController.findUser);

router.post("/register", adminController.registerUser);

router.post("/updateuser", adminController.updateUser);

router.get("/addnews", (req,res) => {
    res.render("admin-addnews", {news: "", message : ""});
});

router.post("/addnews", newsController.addNews);

router.get("/editnews", newsController.allNews);

router.get("/edit/:id", newsController.newsById);

router.post("/editnews", newsController.updateNews);

router.get("/deletenews/:id", newsController.deleteNews);

module.exports = router;
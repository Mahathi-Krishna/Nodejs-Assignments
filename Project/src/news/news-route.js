const express = require("express");
const router = express.Router();
const newsController = require("./controller/news-controller");

router.get("/sports", newsController.allSports);

router.get("/trending", newsController.allTrending);

router.get("/worldnews", newsController.worldNews);

module.exports = router;
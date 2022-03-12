const express = require("express");
const router = express.Router();
const newsController = require("./controller/news-controller");

router.get("/sports", newsController.allSports);

module.exports = router;
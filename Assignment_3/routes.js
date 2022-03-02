const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/:id", controller.Movie);
router.get("/", controller.AllMovies);

module.exports = router;
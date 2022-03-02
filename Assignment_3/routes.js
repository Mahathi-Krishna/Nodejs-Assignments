const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/achievements/:id?", controller.BestMovies);
router.get("/top", controller.TopRatedMovies);
router.get("/:id", controller.Movie);
router.get("/", controller.AllMovies);

router.put("/:id", controller.UpdateMovie);

module.exports = router;
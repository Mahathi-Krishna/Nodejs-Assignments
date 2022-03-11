const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    res.render("admin-home", {user : ""});
});

router.post("/finduser", );

router.post("/register", );





module.exports = router;
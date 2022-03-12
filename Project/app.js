const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const session = require("express-session");

const mongoDb = require("./mongodb");
const userRouter = require("./src/user/user-route");
const adminRouter = require("./src/admin/admin-route");

const port = 3000;

const app = express();
mongoDb.connect();

app.use(bodyparser.urlencoded({extended: false}));

app.use(session({
    secret: "Tom Marvolo Riddle",
    cookie: {maxAge: 500000},
    saveUninitialized: false
}));

app.use(express.static(__dirname+"/public"));
app.set("view engine", "ejs");
app.set("views", [path.join(__dirname,"./src/user/views"),
    path.join(__dirname,"./src/admin/views"),
    path.join(__dirname,"/src/views")]);

app.use(bodyparser.urlencoded({extended : false}));

app.use("/user", userRouter);
app.use("/admin", adminRouter);

app.use("/news", newsRouter);

app.get("/", (req,res) => {
    res.render("home");
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
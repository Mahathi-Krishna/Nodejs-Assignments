const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const adminRouter = require("./admin/routes/admin-routes");
const order = require("./orders/routes/order-routes");
const mongoDb = require("./mongodb");

const port = 3000;

const app = express();
mongoDb.connect();

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

app.use(express.static(path.join(__dirname,"./")));
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({extended : false}));

app.use("/admin", adminRouter);

app.get("/", (req,res) => {
    res.render("home", {message: ""});
});

app.post("/", order);
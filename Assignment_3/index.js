const express = require("express");
const router = require("./routes");
const mongoDb = require("./mongodb");
const bodyParser = require("body-parser");

const app = express();
mongoDb.connect();

const port = 3000;

app.listen(port, () => {
        console.log("Server is listening to Port: "+port);
});

app.use(bodyParser.json());

app.use("/movies", router);

app.get("/", (req,res) => {
    res.send("<h1>Hello</h1><h1>Welcome to Movies app</h1>");
});
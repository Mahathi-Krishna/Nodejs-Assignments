const express = require("express");
const controller = require("./controller");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.listen(port, () => {
        console.log("Server is listening to Port: "+port);
});

app.use(bodyParser.json());

app.get("/employee", controller.getEmployeeData);

app.get("/project", controller.getProjects);

app.get("/employeedetails", controller.getEmployeeDetails);

app.get("/", (req,res) => {
    res.send("<h1>Hello</h1><h1>Welcome to Game of Thrones</h1>");
});
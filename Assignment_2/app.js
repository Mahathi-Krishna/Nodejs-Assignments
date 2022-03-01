const express = require("express");
const controller = require("./controller");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
const url = "http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees";

const port = 3000;

app.listen(port, () => {
        console.log("Server is listening to Port: "+port);
});

app.use(bodyParser.json());

app.get("/employee/:id", controller.getEmployeeData);

app.get("/project/:id", controller.getProjects);

app.get("/employeedetails/:id", controller.getEmployeeDetails);

app.get("/module", (req,res) => {
    request(url, (err,response,body) => {
        if(err) { console.log(err); }
        else {
            const data = JSON.parse(body);
            res.send(data);
        }
    });
});

app.get("/", (req,res) => {
    res.send("<h1>Hello</h1><h1>Welcome to Game of Thrones</h1>");
});
const fs = require("fs");
const express = require("express");

const app = express();

const portNumber = 3300;

app.listen(portNumber, () => {
    console.log(`Application is listening to port:${portNumber}`);
});

fs.readFile("./data.json", (err,data) => {
        if(err){
            console.log(err);
        }else{
            app.get("/", (req,res) => {
                res.send(JSON.parse(data));
            })
        }
    });
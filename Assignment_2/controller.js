const fs = require("fs");

var id = 0;
var idFound = false;
var details, projdata;

module.exports.getEmployeeData = (req,res) => {

    fs.readFile("EmployeeData.json", (err,data) => {

        id = req.body.id;
        data = JSON.parse(data);

        if(err){ console.log(err); }
        else{
            for(i=0; i<data.length; i++){
                if(id == data[i].EmpId){
                    id = i;
                    idFound = true;
                }
            }

            if(idFound){
                res.send(data.at(id));
            }else{
                res.send("Entered Id is not found");
            }
        }
    });
};

exports.getProjects = (req,res) => {

    fs.readFile("ProjectDetails.json", (err,data) => {

        id = req.body.id;
        idFound = false;
        data = JSON.parse(data);

        if(err){ console.log(err); }
        else{
            for(i=0; i<data.length; i++){
                if(id == data[i].ProjectId){
                    id = i;
                    idFound = true;
                }
            }

            if(idFound){
                res.send(data.at(id));
            }else{
                res.send("Entered Id is not found");
            }
        }
    });
};

exports.getEmployeeDetails = (req,res) => {
    fs.readFile("EmployeeData.json", (err,data) => {

        id = req.body.id;
        idFound = false;
        data = JSON.parse(data);

        if(err){ console.log(err); }
        else{
            for(i=0; i<data.length; i++){
                if(id == data[i].EmpId){
                    id = data[i].ProjectId;
                    projdata = fs.readFileSync("ProjectDetails.json");
                    projdata = JSON.parse(projdata);

                    for(j=0; j<projdata.length; j++){

                        if(id == projdata[j].ProjectId){
                            details = {
                                Id: data[i].EmpId,
                                Name: data[i].EmpName,
                                Gender: data[i].Gender,
                                Project: projdata[j].ProjectName,
                                Location: projdata[j].Location
                            };
                            res.send(JSON.stringify(details));
                        }
                    }
                }
            }
        }
    });
};
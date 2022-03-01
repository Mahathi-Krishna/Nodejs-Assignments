const fs = require("fs");

var pid = 0;
var idFound = false;
var details, projdata;

module.exports.getEmployeeData = (req,res) => {

    fs.readFile("EmployeeData.json", (err,data) => {

        pid = req.params.id;
        data = JSON.parse(data);

        if(err){ console.log(err); }
        else{
            for(i=0; i<data.length; i++){
                if(pid == data[i].EmpId){
                    pid = i;
                    idFound = true;
                }
            }

            if(idFound){
                res.send(data.at(pid));
            }else{
                res.send("Entered Id is not found");
            }
        }
    });
};

exports.getProjects = (req,res) => {

    fs.readFile("ProjectDetails.json", (err,data) => {

        pid = req.params.id;
        idFound = false;
        data = JSON.parse(data);

        if(err){ console.log(err); }
        else{
            for(i=0; i<data.length; i++){
                if(pid == data[i].ProjectId){
                    pid = i;
                    idFound = true;
                }
            }

            if(idFound){
                res.send(data.at(pid));
            }else{
                res.send("Entered Id is not found");
            }
        }
    });
};

exports.getEmployeeDetails = (req,res) => {
    fs.readFile("EmployeeData.json", (err,data) => {

        pid = req.params.id;
        idFound = false;
        data = JSON.parse(data);

        if(err){ console.log(err); }
        else{
            for(i=0; i<data.length; i++){
                if(pid == data[i].EmpId){
                    pid = data[i].ProjectId;
                    projdata = fs.readFileSync("ProjectDetails.json");
                    projdata = JSON.parse(projdata);

                    for(j=0; j<projdata.length; j++){

                        if(pid == projdata[j].ProjectId){
                            details = {
                                Id: data[i].EmpId,
                                Name: data[i].EmpName,
                                Gender: data[i].Gender,
                                Project: projdata[j].ProjectName,
                                Location: projdata[j].Location
                            };

                            details = JSON.stringify(details);
                            res.send(details);
                        }
                    }
                }
            }
        }
    });
};
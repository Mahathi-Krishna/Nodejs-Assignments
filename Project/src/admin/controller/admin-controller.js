const userModel = require("../../user/model/user-model");
const userLayer = require("../../user/logiclayer/user-layer");

var emailToUpdate = {};

exports.findUser = (req,res) => {
    userLayer.getUserbyEmail(req.body.email, (err, userObj) => {
        if (err || userObj == null) {
            res.render("admin-home", {user : "", message : "User does not Exist..."});
        }
        else if (userObj) {
            emailToUpdate = userObj.email;
            res.render("admin-home", {user : userObj, message : ""});
        }
    });
};

exports.registerUser = (req,res) => {
    const user = new userModel(req.body.name, req.body.email, req.body.password, req.body.isadmin);
    userLayer.addUser(user, (err) => {
        if(err) {
            console.log(err);
            res.render("admin-home", {user : "", message : "Registration Unsuccessful, Please try again..." });
        }
        else {
            res.render("admin-home", {user : "", message : "Registration Successful..!" });
        }
    });
};

exports.updateUser = (req,res) => {
    if(req.body.isdelete == "Y") {
        userLayer.deleteUser(emailToUpdate, (err) => {
            if(err) {
                console.log(err);
                res.render("admin-home", {user : "", message : "Unable to delete user, Please try again..." });
            }
            else {
                res.render("admin-home", {user : "", message : "1 User Deleted..!" });
            }
        });
    }
    else {
        const user = new userModel(req.body.name, req.body.email, req.body.password, req.body.isadmin);
        userLayer.updateUser(user, emailToUpdate, (err) => {
            if(err) {
                console.log(err);
                res.render("admin-home", {user : "", message : "Update Unsuccessful, Please try again..." });
            }
            else {
                res.render("admin-home", {user : "", message : "Update Successful..!" });
            }
        });
    }
};
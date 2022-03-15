const userModel = require("../model/user-model");
const userLayer = require("../logiclayer/user-layer");

exports.loginUser = (req,res) => {
    userLayer.getUserbyEmail(req.body.email, (err, userObj) => {
        if (err) {
            message = { msg: "Error: Login Unsuccessful.." };
            console.log(err);
            res.render("user-login", { result: message });
        }
        else if (!userObj || userObj.password != req.body.password) {
            message = { msg: "Invalid Email or Password..." };
            res.render("user-login", { result: message });
        }
        else if (userObj && userObj.password == req.body.password) {
            if(userObj.isAdmin == 'Y') {
                res.redirect("/admin");
            }
            else if(userObj.isAdmin == 'N') {
                req.session.authenticated = true;
                req.session.user = userObj;
                res.redirect("/");
            }
        }
    });
};

exports.registerUser = (req,res) => {
    var message;
    const user = new userModel(req.body.name, req.body.email, req.body.password, "N");
    userLayer.addUser(user, (err) => {
        if(err) {
            message = { msg: "Registration Unsuccessful, Please try again..." };
            console.log(err);
            res.render("user-register", { result: message });
        }
        else {
            message = { msg: "Registration Successful, Please login..." };
            console.log("Registration Successful");
            res.render("user-login", {message});
        }
    });
};
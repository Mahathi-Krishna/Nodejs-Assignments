const userModel = require("../../user/model/user-model");
const userLayer = require("../../user/logiclayer/user-layer");

exports.findUser = (req,res) => {
    userLayer.getUserbyEmail(req.body.email, (err, userObj) => {
        if (err || userObj == null) {
            res.render("admin-home", {user : "", message : "User does not Exist..."});
        }
        else if (userObj) {
            res.render("admin-home", {user : userObj, message : ""});
        }
    });
};
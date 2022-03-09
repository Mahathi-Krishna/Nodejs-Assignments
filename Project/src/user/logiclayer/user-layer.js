const db = require("../../../mongodb");

exports.getUserbyEmail = (email, cb) => {
    const collection = db.getCollection("user");
    collection.findOne({email : email})
        .then(
            (user) => { cb(null,user); },
            (err) => { cb(err,null); }
        );
};

exports.addUser = (model, cb) => {
    const collection = db.getCollection("user");
    collection.insertOne({
        name: model.name,
        email: model.email,
        password: model.password,
        isAdmin: model.isAdmin
    }).then(
        () => { cb(); },
        (err) => { cb(err); }
    );
};
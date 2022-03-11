const express = require("express");
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

exports.updateUser = (model, emailToUpdate, cb) => {
    const filter = {email: emailToUpdate};
    const data = { $set: { name: model.name, email: model.email, password: model.password, isAdmin: model.isAdmin } };
    const collection = db.getCollection("user");
    collection.findOneAndUpdate(filter, data)
        .then(
            () => { cb(); },
            (err) => { cb(err); }
        );
};

exports.deleteUser = (emailToDelete, cb) => {
    const filter = {email: emailToDelete};
    const collection = db.getCollection("user");
    collection.deleteOne(filter)
        .then(
            () => { cb(); },
            (err) => { cb(err); }
        );
};
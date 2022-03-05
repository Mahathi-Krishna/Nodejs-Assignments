const mongoDb = require("../../mongodb");

module.exports.placeOrder = (model, cb) => {
    const collection = mongoDb.getCollection("orders");
    collection.insertOne(
        {
            name: model.name, email: model.email, address: model.address, item: model.item, orderDate: model.orderDate
        })
        .then(
            () => { cb(); },
            (err) => {console.log(err);}
        );
};
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

module.exports.getAllOrders = (res) => {
    const collection = mongoDb.getCollection("orders");
    collection.find().toArray((err,jsonResult) => {
        if(err) {console.log(err);}
        else {
            var result = jsonResult;
            var newDate = new Date();
            for(var i=0; i<result.length; i++)
            {
                if(newDate>result[i].orderDate){
                    if((newDate.getDate()-result[i].orderDate.getDate()) >=2){result[i].status = "Dispatched"}
                    else if ((newDate.getDate()-result[i].orderDate.getDate()) ==1){result[i].status = "Packed"}
                    else {result[i].status = "In-porgress"}
                }
            }
            res.render("orders", {result: result});
        }
    });
};
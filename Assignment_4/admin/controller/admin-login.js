const adminModel = require("../model/admin-model");
const mongoDb = require("../../mongodb");
const orders = require("../../orders/controller/order-controller");

module.exports.verify = (req,res) => {
    const collection = mongoDb.getCollection("admin");
    const model = new adminModel (req.body.email, req.body.password);

    collection.findOne({email:model.email})
        .then(
            (admin) => {
                if(model.password == admin.password){
                    orders.getAllOrders(res);
                }else{
                    console.log("Incorrect credentials");
                }
            },
            (err) => {console.log(err);}
        );
};
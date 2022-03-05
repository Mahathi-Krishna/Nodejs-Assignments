const express = require("express");
const path = require("path");
const router = express.Router();

const orderModel = require("../model/order-model");
const controller = require("../controller/order-controller");

router.post("/", (req,res) => {
    const order = new orderModel (req.body.name, req.body.email, req.body.address, req.body.item, new Date());
    controller.placeOrder(order, () => {
        console.log("Order placed successfully");
        res.render("orders",{title:'Order Placed'});
    });
});

module.exports = router;
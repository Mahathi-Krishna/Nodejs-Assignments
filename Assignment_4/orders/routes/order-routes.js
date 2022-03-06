const express = require("express");
const router = express.Router();

const orderModel = require("../model/order-model");
const controller = require("../controller/order-controller");

router.post("/", (req,res) => {
    const newStatus = "In-progress";
    const order = new orderModel (req.body.name, req.body.email, req.body.address, req.body.item, new Date(), newStatus);
    controller.placeOrder(order, () => {
        console.log("Order placed successfully");
        res.render("home", {message: "Order Placed Successfully !"});
    });
});

module.exports = router;
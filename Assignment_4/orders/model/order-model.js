class Order {
    constructor (name, email, address, item, date) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.item = item;
        this.orderDate = date;
    };
};

module.exports = Order;
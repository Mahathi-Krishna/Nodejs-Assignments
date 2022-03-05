const mongoClient = require("mongodb").MongoClient;

const url = "mongodb+srv://mahathi:mahathi@cluster0.gpz4o.mongodb.net/orders?retryWrites=true&w=majority";
var dbClient;

module.exports.connect = () => {
    mongoClient.connect(url)
        .then(
            (client) => {
                dbClient = client;
                console.log("Database is connected");
            },
            (err) => {console.log(err);}
        );
};

module.exports.getCollection = (name) => {
    const collection = dbClient.db("orders").collection(name);
    return collection;
};
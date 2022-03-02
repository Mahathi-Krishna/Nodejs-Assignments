const mongoClient = require("mongodb").MongoClient;

const url = "mongodb+srv://mahathi:mahathi@cluster0.gpz4o.mongodb.net/movies?retryWrites=true&w=majority";

var dbClient;

exports.connect = () => {
    mongoClient.connect(url)
        .then(
            (client) => {
                dbClient = client;
                console.log("Database is connected");
            },
            (err) => {
                console.log(err);
            }
        );
};

exports.getCollection = (name) => {
    const collection = dbClient.db("movies").collection(name);
    return collection;
};
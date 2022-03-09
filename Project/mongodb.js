const mongoClient = require("mongodb").MongoClient;

const url = "mongodb+srv://mahathi:mahathi@cluster0.gpz4o.mongodb.net/project?retryWrites=true&w=majority";
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
    const collection = dbClient.db("project").collection(name);
    return collection;
};
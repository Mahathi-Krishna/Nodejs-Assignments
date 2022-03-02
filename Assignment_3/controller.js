const mongoDb = require("./mongodb");
const { ObjectId } = require("mongodb");

exports.AllMovies = (req,res) =>  {
    const dbCollection = mongoDb.getCollection("movies");
    dbCollection.find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
};

exports.Movie = (req,res) => {
    const id = req.params.id;
    const dbCollection = mongoDb.getCollection("movies");
    dbCollection.findOne({_id: ObjectId(id)})
        .then(
            (movie) => { res.send(movie); },
            (err) => { throw err; }
        );
};
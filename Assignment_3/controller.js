const mongoDb = require("./mongodb");
const { ObjectId } = require("mongodb");
const { is } = require("express/lib/request");

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

exports.TopRatedMovies = (req,res) => {
    const top3movies = [];

    const dbCollection = mongoDb.getCollection("movies");
    dbCollection.find().toArray((err, result) => {
        if (err) throw err;
        
        result.sort((a,b)=>(b.rating-a.rating));

        top3movies.push(result[0], result[1], result[2]);
        
        res.send(top3movies);
    });
};

exports.UpdateMovie = (req,res) => {
    const id = req.params.id;
    const filter = {_id: ObjectId(id)};
    const data = { $set: { achievements : req.body.achievements } };

    const dbCollection = mongoDb.getCollection("movies");

    dbCollection.findOneAndUpdate(filter, data)
        .then(
            () => { res.send("1 document updated"); },
            (err) => { throw err; }
        );
};

exports.BestMovies = (req,res) => {
    const isAchieved = req.params.id;

    if(isAchieved == undefined) {
        const filter = {achievements : {$ne:null}};

        const dbCollection = mongoDb.getCollection("movies");
        dbCollection.find(filter).toArray((err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } else {
        const filter = {achievements : isAchieved};

        const dbCollection = mongoDb.getCollection("movies");
        dbCollection.find(filter).toArray((err, result) => {
            if (err) throw err;
            res.send(result);
        });
    }
};
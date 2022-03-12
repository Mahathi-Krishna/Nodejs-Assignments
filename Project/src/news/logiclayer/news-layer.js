const db = require("../../../mongodb");

exports.insertNews = (model, cb) => {
    const collection = db.getCollection("news");
    collection.insertOne({
        title: model.title,
        image: model.image,
        genre: model.genre,
        detail: model.detail,
        created: model.date
    }).then(
        () => { cb(); },
        (err) => { cb(err); }
    );
};

exports.getAllSports = (res) => {
    const collection = db.getCollection("news");
    const filter = {genre: "Sports"};
    
    collection.find(filter).toArray((err,jsonResult) => {
        if(err) {console.log(err);}
        else {
            var result = jsonResult;
            res.render("sports-view", {result});
        }
    });
};
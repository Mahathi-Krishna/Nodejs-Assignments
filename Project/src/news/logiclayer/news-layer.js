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
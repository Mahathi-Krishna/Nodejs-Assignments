const db = require("../../../mongodb");
const { ObjectId } = require("mongodb");

exports.insertNews = (model, cb) => {
    const collection = db.getCollection("news");
    collection.insertOne({
        title: model.title,
        image: model.image,
        genre: model.genre,
        detail: model.detail,
        created: model.date,
        istrending: model.istrending
    }).then(
        () => { cb(); },
        (err) => { cb(err); }
    );
};

exports.getAllNews = (res) => {
    const collection = db.getCollection("news");
    
    collection.find().toArray((err,jsonResult) => {
        if(err) {console.log(err);}
        else {
            var result = jsonResult.sort((a,b) => {return a.created - b.created});
            res.render("admin-editnews", {result: result, message: ""});
        }
    });
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

exports.getAllTrending = (res) => {
    const collection = db.getCollection("news");
    const filter = {istrending: "Y"};
    
    collection.find(filter).toArray((err,jsonResult) => {
        if(err) {console.log(err);}
        else {
            var result = jsonResult;
            res.render("trending-view", {result});
        }
    });
};

exports.getWorldNews = (res) => {
    const collection = db.getCollection("news");
    const filter = {genre: "World"};
    
    collection.find(filter).toArray((err,jsonResult) => {
        if(err) {console.log(err);}
        else {
            var result = jsonResult;
            res.render("world-view", {result});
        }
    });
};

exports.getNewsById = (id, cb) => {
    const collection = db.getCollection("news");
    
    collection.findOne({ _id: ObjectId(id) })
        .then(
            (news) => { cb(news); },
            (err) => { console.log(err); }
        );
};

exports.updNews = (model, newsId, res) => {
    const filter = {_id: ObjectId(newsId)};
    const data = { $set: { title: model.title, image: model.image, genre: model.genre, detail: model.detail, created: model.date } };
    const collection = db.getCollection("news");
    collection.findOneAndUpdate(filter, data)
        .then(
            () => {
                collection.find().toArray((err,jsonResult) => {
                    if(err) {console.log(err);}
                    else {
                        var result = jsonResult.sort((a,b) => {return a.created - b.created});
                        res.render("admin-editnews", {result: result, message: "1 News Updated"});
                    }
                });
            },
            (err) => { collection.find().toArray((err,jsonResult) => {
                if(err) {console.log(err);}
                else {
                    var result = jsonResult.sort((a,b) => {return a.created - b.created});
                    res.render("admin-editnews", {result: result, message: "Update Unsuccessfull..."});
                }
            });
        }
    );
};

exports.delNews = (newsId, res) => {
    const filter = {_id: ObjectId(newsId)};
    const collection = db.getCollection("news");
    collection.deleteOne(filter)
        .then(
            () => {
                collection.find().toArray((err,jsonResult) => {
                    if(err) {console.log(err);}
                    else {
                        var result = jsonResult.sort((a,b) => {return a.created - b.created});
                        res.render("admin-editnews", {result: result, message: "1 News Deleted"});
                    }
                });
            },
            (err) => { collection.find().toArray((err,jsonResult) => {
                if(err) {console.log(err);}
                else {
                    var result = jsonResult.sort((a,b) => {return a.created - b.created});
                    res.render("admin-editnews", {result: result, message: "Delete Unsuccessfull..."});
                }
            });
        }
    );
};

exports.gethomepage = (res) => {
    const collection = db.getCollection("news");
    const filter_trend = {istrending: "Y"};
    const filter_world = {genre: "World"};

    var result_trend, result_world;

    collection.find(filter_trend).toArray((err,trendingResult) => {
        if(err) {console.log(err);}
        else {
            result_trend = trendingResult;

            collection.find(filter_world).toArray((err,worldResult) => {
                if(err) {console.log(err);}
                else {
                    result_world = worldResult;
                    res.render("home", {trend: result_trend, world: result_world});
                };
            });            
        };
    });
};
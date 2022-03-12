const newsModel = require("../model/news-model");
const newsLayer = require("../logiclayer/news-layer");

exports.addNews = (req,res) => {
    const news = new newsModel(req.body.title, req.body.image, req.body.genre, req.body.detail, new Date());
    newsLayer.insertNews(news, (err) => {
        if(err) {
            message = "Unable to Insert News, Please try again...";
            console.log(err);
            res.render("admin-addnews", { message });
        }
        else {
            message = "1 News Inserted..!";
            res.render("admin-addnews", { message });
        }
    });
};
const newsModel = require("../model/news-model");
const newsLayer = require("../logiclayer/news-layer");

var newsId;

exports.addNews = (req,res) => {
    const news = new newsModel(req.body.title, req.body.image, req.body.genre, req.body.detail, new Date(), "N");
    newsLayer.insertNews(news, (err) => {
        if(err) {
            message = "Unable to Insert News, Please try again...";
            console.log(err);
            res.render("admin-addnews", { news: "", message: message });
        }
        else {
            message = "1 News Inserted..!";
            res.render("admin-addnews", { news: "", message: message });
        }
    });
};

exports.allNews = (req,res) => {
    newsLayer.getAllNews(res);
};

exports.allSports = (req,res) => {
    newsLayer.getAllSports(res);
};

exports.allTrending = (req,res) => {
    newsLayer.getAllTrending(res);
};

exports.worldNews = (req,res) => {
    newsLayer.getWorldNews(res);
};

exports.newsById = (req,res) => {
    newsId = req.params.id;
    newsLayer.getNewsById(newsId, (data) => {
        res.render("admin-addnews", {news: data, message : ""});
    });
};

exports.updateNews = (req,res) => {
    const news = new newsModel(req.body.title, req.body.image, req.body.genre, req.body.detail, new Date());
    newsLayer.updNews(news, newsId, res);
}

exports.deleteNews = (req,res) => {
    const newsToDelete = req.params.id;
    newsLayer.delNews(newsToDelete, res);
};
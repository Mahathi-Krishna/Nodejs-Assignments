class news {
    constructor (title, image, genre, detail, date, istrending) {
        this.image = image;
        this.title = title;
        this.detail = detail;
        this.genre = genre;
        this.date = date;
        this.istrending = istrending;
    };
};

module.exports = news;
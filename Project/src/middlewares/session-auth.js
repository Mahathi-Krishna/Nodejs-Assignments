
const sessionAuth = (req,res,next) => {
    if (req.session && req.session.authenticated) {
        next();
    }
    else {
        const message = { msg: "Please Log-in to continue..."};
        res.render("user-login", {message});
    }
};

module.exports = sessionAuth;
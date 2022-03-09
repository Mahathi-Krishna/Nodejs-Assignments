
const sessionAuth = (req,res,next) => {
    if (req.session && req.session.authenticated) {
        next();
    }
    else {
        console.log("Invalid Session");
    }
};

module.exports = sessionAuth;
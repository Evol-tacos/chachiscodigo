const authrequire = (req, res, next) => {
    console.log(req.headers);
    next();
};
module.exports = {authrequire};
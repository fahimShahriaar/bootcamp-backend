const logger = (req, res, next) => {
    console.log(`${req.mehtod} ${req.protocol}://${req.host}:${req.originalUrl}`);
}

module.exports = logger;
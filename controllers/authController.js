const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    console.log('auth middleware called')
    const token = req.header('authorization-token');
    if(!token) return res.status(401).send('Access denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(401).send('Invalid token');
    }
}
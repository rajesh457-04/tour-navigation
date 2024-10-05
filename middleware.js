const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    try {
        let token = req.header('x-token');
        if (!token) {
            return res.status(400).send('Token Not Found');
        }
        let decoded = jwt.verify(token, 'jwtSecret');
        req.user = decoded.user;
        next();
    } catch (err) {
        console.error('JWT verification failed:', err);
        return res.status(401).send('Invalid Token');
    }
};

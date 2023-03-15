const jwt = require('jsonwebtoken');
const Token = require('../models/token');

module.exports = auth = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(400).send('access denied');

    try {
        const verified = jwt.verify(token, "MySecretKey");
        if (!verified) {
            res.status(400).send("invalid token");
        }

        const userAuth = await Token.findOne(
            {
                _userId: verified.id,
                token: token,
                tokenType: 'login'
            }
        ).exec();
        if (!userAuth) {
            res.status(400).send("database token not found");
        } else {
            req.userId = verified.id;
            req.token = token
            next();
        }
    }catch(e){
        res.status(400).send("invalid token");
    }
}

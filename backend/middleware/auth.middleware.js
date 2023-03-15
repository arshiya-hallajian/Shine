const jwt = require('jsonwebtoken');
const Token = require('../models/token');

module.exports = auth = async (req, res, next) => {
    //check auth-token header existence
    const token = req.header('auth-token');
    if (!token) return res.status(400).send('access denied');

    try {
        //verify token with secretKey
        const verified = jwt.verify(token, "MySecretKey");

        //find token in database
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

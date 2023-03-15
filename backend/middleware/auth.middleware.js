const jwt = require('jsonwebtoken');
const Token = require('../models/token');

module.exports = auth = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(400).send('access denied');

    jwt.verify(token, "MySecretKey", (err, decoded) => {
        if(err) return res.status(400).send("invalid token");
        try {
            Token.findOne({_userId: decoded.id, token: token, tokenType: 'login'},(err, UserAuthed) => {
                if(err) return res.status(400).send(err);
                if(!UserAuthed) {
                    res.status(400).send(UserAuthed);
                }else {
                console.log(UserAuthed);
                res.send(UserAuthed.token)
                }

            })

        }catch (e) {
            res.status(400).send("user")
        }
    })
}

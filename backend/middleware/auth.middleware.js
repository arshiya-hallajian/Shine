const jwt = require('jsonwebtoken');
const Token = require('../models/token');

const auth = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(400).send('access denied');

    const verified = jwt.verify(token, "MySecretKey").then(err => {
        console.log(err);
    });


}
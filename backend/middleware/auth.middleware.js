const jwt = require('jsonwebtoken');
const Token = require('../models/token');

module.exports = auth = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(400).send('access denied');


}

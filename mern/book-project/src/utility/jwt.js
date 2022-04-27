const Subscriber = require('../models/subscriber')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Message = require('../utility/statusCode')

exports.jwtSign = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            res.sendStatus(Message.BAD_REQUEST);
        }
        const subscriber = await Subscriber.findOne({ email });

        const authToken = jwt.sign({ _id: subscriber._id }, 'thiswillbemysecret')
        console.log(authToken)
        res.header('authToken', authToken).send(authToken)

    } catch (error) {
        res.sendStatus(Message.NOT_FOUND)
    }
};

exports.jwtVerify = (req, res, next) => {
    const token = req.header('authToken');
    if (!token) {
        return res.status(Message.UNAUTHORIZED).send('Access Denied!');
    }
    try {
        const verifiedSubscriber = jwt.verify(token, 'thiswillbemysecret');
        req.subscriber = verifiedSubscriber;
        next()
    } catch (error) {
        res.sendStatus(Message.BAD_REQUEST)
    }
}


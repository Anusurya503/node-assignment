const Subscriber = require('../models/subscriber')
const logger = require('../utility/logger')
const Message = require('../utility/statusCode')


exports.signup = (req, res) => {
    const subscriber = new Subscriber(req.body)

    subscriber.save().then(() => {
        res.send(subscriber)
    }).catch((error) => {
       res.sendStatus(Message.NOT_FOUND)
    })
    logger.subscriberLogger.log('error', "NOT FOUND")
};


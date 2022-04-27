const {createLogger,transports, format} = require('winston');

const subscriberLogger = createLogger({
    transports: [
      new transports.File({
          filename: 'subsriber.log',
          level:'info',
          format: format.combine(format.timestamp(), format.json())
      }),
      new transports.File({
          filename: 'subscriber-error.log',
          level:'error',
          format: format.combine(format.timestamp(), format.json())
      })
    ]
  });

module.exports= {subscriberLogger};
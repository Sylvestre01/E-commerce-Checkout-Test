// cypress/plugins/logger.js

const winston = require('winston');

// Define logger options
const logger = winston.createLogger({
    level: 'info', // Log levels (error, warn, info, verbose, debug)
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
    ),
    transports: [
        new winston.transports.File({ filename: 'logs/app.log', level: 'info' }),
        new winston.transports.Console() // Output to console as well
    ]
});

// Export the logger
module.exports = logger;

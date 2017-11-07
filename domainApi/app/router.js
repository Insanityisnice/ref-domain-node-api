const express = require('express');
const Logger = require('../logger');

let heartbeat = require('./heartbeat');
let values = require('./values');

let logger = new Logger('values');

logger.log.info('Creating express router.');
let router = express.Router();

logger.log.info('Adding heartbeat route.');
heartbeat.addRoutes(router);

logger.log.info('Adding values routes.');
values.addRoutes(router);

module.exports = router;
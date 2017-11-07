const configuration = require('../configuration');
const Logger = require('../logger');

const domainName = configuration.api.domain;
const apiVersion = configuration.api.version;

let logger = new Logger('heartbeat');

module.exports = {
    addRoutes(router) {
        router.route('/heartbeat')
            .get((req, res) => {
                logger.context = req.context;
                logger.log.debug(`The ${domainName} Api Version ${apiVersion} is online.`);
                res.send(`The ${domainName} Api Version ${apiVersion} is online.`);
            });
    }
}
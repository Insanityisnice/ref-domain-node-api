const Logger = require('../logger');

let logger = new Logger('values');

module.exports = {
    addRoutes(router) {
        router.route('/values')
            .get((req, res) => {
                logger.context = req.context;
                logger.log.debug('Get values.');
                res.send([{name:'value1'},{name:'value2'}]);
            })
            .post((req, res) => {
                logger.context = req.context;
                var message = req.body;
                logger.log.debugobj(`New values posted.`, message);

                res.send(message);
            });
    }
}
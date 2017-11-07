const express = require('express');
const bodyParser = require('body-parser');
const router = require('./app/router');

class ExpressApp {
    constructor(apiVersion, logger){
        this.logger = logger;

        this.logger.log.info(`Creating express application.`);
        let app = express();
        
        this.logger.log.info(`Adding body parser.`);
        app.use(bodyParser.json());
        
        this.logger.log.info(`Adding express router.`);
        app.use(`/api/${apiVersion}`, router);

        this._app = app;
    }

    get app() {
        return this._app;
    }

}

module.exports = ExpressApp;
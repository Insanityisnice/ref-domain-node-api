//TODO: Enable debugging from vscode to docker
//TODO: Allow container to watch the app folder for changes so it doesn't have to be rebuild for every change.
//TODO: Add swagger
//TODO: Add build/run/debug tasks for vscode

const azure = require("azure-function-express");

const configuration = require('./configuration');
const Logger = require('./logger');
const ExpressApp = require('./expressApp');

const apiVersion = configuration.api.version;

let logger = new Logger('server');

let app = new ExpressApp(apiVersion, logger).app;

if (configuration.environment.host === 'azure-function') {
  logger.log.info(`Configuring to run as an Azure Function.`);

  module.exports = azure.createHandler(app);
} else if (configuration.environment.host === 'express') {
  logger.log.info(`Configuring to run as an Express Application.`);
  
  let port = configuration.environment.port;

  let server = app.listen(port, function () {
    logger.log.info(`Server listening at :${port}/api/${apiVersion}`);
  });
} else {
  logger.log.fatal(`Unknown host:${configuration.environment.host}, unable to start the application.`);
}

var log4js = require("log4js");

function azureFunctionContextAppender(layout) {
  return (loggingEvent) => {
    var context = loggingEvent.logger.context;
    if(context) {
        context.log(layout(loggingEvent));
    }
  };
}

function configure(config) {
  let layout = log4js.layouts.basicLayout;
  if (config.layout) {
    layout = log4js.layouts.layout(config.layout.type, config.layout);
  }
  return azureFunctionContextAppender(layout);
}
exports.configure = configure;
exports.appender = azureFunctionContextAppender;
module.exports = {

    environment: {
        port: process.env.API_PORT || 8080,
        host: process.env.API_HOST || 'azure-function'
    },
    api: {
        domain: 'domain',
        version: 'v1'
    },
    log4js: {
        appenders: [
            {
                type: "../../../../domainApi/appenders/azureFunctionContext.js",
                layout: {
                    type: "basic"
                }
            }
        ]
    }
};
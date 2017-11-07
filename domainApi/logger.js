const configuration = require('./configuration');

const domainName = configuration.api.domain;
const apiVersion = configuration.api.version;

var log4js = require('log4js');
log4js.configure(configuration.log4js);

class Logger {
    constructor(module, context = null) {
        //TODO: Validate domain, version and module are not null or empty

        var category = `${domainName}/${apiVersion}/${module}`;
        this.log = log4js.getLogger(category);

        this.log.debugobj = (message, obj) => {
            this.log.debug(`${message}\n${JSON.stringify(obj, null, 4)}`);
        }

        this.context = context;
    }

    get context(){
        return this._context;
    }
    set context(newContext){
        this._context = newContext;
        this.log.context = newContext;
    }
}

module.exports = Logger;
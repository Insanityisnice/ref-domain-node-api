const request = require('supertest');
var {defineSupportCode} = require('cucumber');

const ExpressApp = require('../../../../domainApi/expressApp');
const logger = require('../stubs/loggerStub');

var result, body;
defineSupportCode(function({Given, When, Then}){
    Given('the API is running', function () { 
        result = request(new ExpressApp("v1", logger).app);
    });

    Given('I set the body to {string}', function(string, callback){
        body = string;
        callback();
    });

    When('I GET {string}', function (string, callback) {
        result = result.get(string);
        callback();
    });

    When('I POST to {string}', function(string, callback){
        result = result.post(string).send(body);
        callback();
    });

    Then('the API returns {int} Code', function (int, callback) {
        result
        .expect(int)
        .then(() => {callback();})
    });
    
    Then('the response contains JSON object {string}', function(string, callback){
        var obj = JSON.parse(string);
        result
        .expect('Content-Type', /json/)
        .expect(obj)
        .then(() => {callback();})
    })
})
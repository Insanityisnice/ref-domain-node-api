const assert = require('assert');
var {defineSupportCode} = require('cucumber');

var passExampleTest = true;

defineSupportCode(function({Given, When, Then}){
    Given(/^we want example Cucumber.js tests$/, function () { 
        
    });

    When(/^we run the example passing test$/, function () {
        passExampleTest = true; 
    });

    Then(/^the example test runs as expected$/, function () {
        assert.equal(passExampleTest, true);
    });
})
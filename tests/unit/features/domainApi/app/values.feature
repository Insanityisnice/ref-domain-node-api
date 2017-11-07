Feature: Values API
As a developer, I want to see an example
API that works inside of ref-domain-node and
is tested using Cucumber.js
    Scenario: GET values
        Given the API is running
        When I GET '/api/v1/values'
        Then the API returns 200 Code
        And the response contains JSON object '[{"name":"value1"},{"name":"value2"}]'

    Scenario: POST values
        Given the API is running
        And I set the body to '{"name":"value1"}'
        When I POST to '/api/v1/values'
        Then the API returns 200 Code
        And the response contains JSON object '{"name":"value1"}'
    
    Scenario: POST values
        Given the API is running
        And I set the body to '{"name":"value1", "name2":"value2"}'
        When I POST to '/api/v1/values'
        Then the API returns 200 Code
        And the response contains JSON object '{"name":"value1", "name2":"value2"}'
Feature: Heartbeat API
As a developer, I want a heartbeat API to check the API is up and running
    Scenario: GET heartbeat
        Given the API is running
        When I GET '/api/v1/heartbeat'
        Then the API returns 200 Code
#given: dado, when: quando, then: então
Feature: Entrando em contato com o hotel

    Background: Visit the Site automationintesting
    Given: I visited the https://automationintesting.online/

    #contacting hotel successfully
    Scenario:contacting hotel successfully scenario
        Given: I look for the tab to contact the hotel
        Then: I fill in the data: name, email, phone, subject, description.
        And: I click the submit button
        Then: A call completed message appears.


#given: dado, when: quando, then: então
Feature: Entrando em contato com o hotel

    Background: Visit the Site automationintesting
    Given: I visited the https://automationintesting.online/

    #contacting hotel successfully
    Scenario:Contacting hotel successfully scenario
        Given: I look for the tab to contact the hotel
        When: I fill in the data: name, email, phone, subject, description.
        And: I click the submit button.
        Then: A call completed message appears.

    #contacting hotel incorrect
    Scenario:Contacting incorrect scenario
        Given: I look for the tab to contact the hotel
        When: I fill in the data: correct name, email, subject, description but wrong phone number.
        And: I click the submit button.
        Then: an error message appears on the screen stating that the phone is in the wrong format.


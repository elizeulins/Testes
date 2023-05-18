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

    #Incorrect telefone scenario
    Scenario:Login with wrong phone
        Given: I look for the tab to contact the hotel
        When: I fill in the data: correct name, email, subject, description but wrong phone number.
        And: I click the submit button.
        Then: an error message appears on the screen stating that the phone is in the wrong format.

    #Incorrect email scenario
    Scenario:Login with wrong email
        Given: I look for the tab to contact the hotel
        When: I fill in the data: correct name, telefone, subject, description but wrong email number.
        And: I click the submit button.
        Then: an error message appears on the screen stating that the email is in the wrong format.

#contacting the hotel without filling in the fields
    Scenario:Contacting the hotel without filling in the fields
        Given: I look for the tab to contact the hotel
        When: and leave all fields to fill in blank
        And: I click the submit button.
        Then: an error message appears telling you to fill in the empty fields

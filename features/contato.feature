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

    #Incorrect PHONE scenario
    Scenario:Fill in wrong phone
        Given: I look for the tab to contact the hotel
        When: I fill in the data: correct name, email, subject, description but wrong phone number.
        And: I click the submit button.
        Then: an error message appears on the screen stating that the phone is in the wrong format.

    #Incorrect EMAIL scenario
    Scenario:Fill in wrong email
        Given: I look for the tab to contact the hotel
        When: I fill in the data: correct name, phone, subject, description, but email with incorrect format.
        And: I click the submit button.
        Then: an error message appears on the screen stating that the email is in the wrong format.

    #Incorrect MESSAGE scenario
    Scenario:Fill with empty message
        Given: I look for the tab to contact the hotel
        When: I fill in the data: correct name, email, phone, subject, but I leave the description field empty.
        And: I click the submit button.
        Then: an error message appears on the screen informing you to fill in the empty fields correctly.    

#contacting the hotel without filling in the fields
    Scenario:Contacting the hotel without filling in the fields
        Given: I look for the tab to contact the hotel
        When: and leave all fields to fill in blank
        And: I click the submit button.
        Then: an error message appears telling you to fill in the empty fields

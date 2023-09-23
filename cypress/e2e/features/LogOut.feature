Feature: Logout

    Scenario: Login in the page Todo.ly
      Given the user enters to the main page
       When user insert credentials for login
       Then the user press the login button
       Then the user logout of the page
       Then the user verifies that the logout was successful
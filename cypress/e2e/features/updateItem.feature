Feature: Update Item

    Scenario: Create new item in Todo.Ly
      Given the user enters to the main page
       When user insert credentials for login
       Then the user press the login button
       Then the user create a new Item
       Then the user update the item
       Then the user logout of the page
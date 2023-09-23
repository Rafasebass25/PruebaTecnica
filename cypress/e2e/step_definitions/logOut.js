import {Given,When, Then} from "@badeball/cypress-cucumber-preprocessor";
import {logOut} from '@pages/logOutPage'

// Paso apretar el botton de logout
When("the user logout of the page", () => {
    logOut.pressLogOutButton();    
  });

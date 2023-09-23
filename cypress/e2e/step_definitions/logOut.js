import {Given,When, Then} from "@badeball/cypress-cucumber-preprocessor";
import {logOut} from '@pages/logOutPage'
import {todoLy} from '@pages/logInPage'

// Paso apretar el botton de logout
When("the user logout of the page", () => {
    logOut.pressLogOutButton();   
    cy.reload(); 
  });
//Paso para verificar existencia del boton
  When("the user verifies that the logout was successful", () => {
    todoLy.verifyExistanceOfLoginButton();    
  });

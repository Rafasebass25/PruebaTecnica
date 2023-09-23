import {Given, When, Then,} from "@badeball/cypress-cucumber-preprocessor";
import {todoLy} from '@pages/logInPage';
import {logOut} from '@pages/logOutPage';


//Pasos usados para realizar el Login en la pagina

Given("the user enters to the main page",()=>{
    cy.visit('/') 
});
When("user insert credentials for login", () => {
    todoLy.logInButton();
    todoLy.logIn('jorgito@gmail.com', 'jorgito')
  });
Then("the user press the login button", () => {
    todoLy.pressLogInButton();  
});

When("the user verifies that the login was successful", () => {
  logOut.verifyVisibiltyLogOutButton();    
});

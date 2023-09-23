import {Given, When, Then,} from "@badeball/cypress-cucumber-preprocessor";
import {todoLy} from '@pages/logInPage'

//Pasos usados para realizar el Login en la pagina

Given("the user enters to the main page",()=>{
    cy.visit('/') 
});
When("user insert credentials for login", () => {
    todoLy.logInButton();
    todoLy.logIn('rafasebassprueba@gmail.com', 'passwordprueba')
  });
Then("the user press the login button", () => {
    todoLy.pressLogInButton();  
});
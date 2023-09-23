import { When} from "@badeball/cypress-cucumber-preprocessor";
import {mainPagePreLogin} from '@pages/mainPagePreLogin'
import {signUpFreeForm} from '@pages/signUpFreeForm'
import {logOut} from '@pages/logOutPage';

//Pasos para llenar el formualario para crear una nueva cuenta
When("the user press the button sign up", () => {
    mainPagePreLogin.pressSignUpFreeButton(); 
});
When("the user fill the form", () => {
    signUpFreeForm.fillingForm('Rafael Quispe','PruebaCorreo6@gmail.com','Prueba');
    signUpFreeForm.pressSignUpButtonForm();

});
When("the user verify that the sign up is successful", () => {
    logOut.verifyVisibiltyLogOutButton();    
});

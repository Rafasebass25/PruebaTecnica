import { When} from "@badeball/cypress-cucumber-preprocessor";
import {mainPagePreLogin} from '@pages/mainPagePreLogin'
import {signUpFreeForm} from '@pages/signUpFreeForm'

//Pasos para llenar el formualario para crear una nueva cuenta
When("the user press the button sign up", () => {
    mainPagePreLogin.pressSignUpFreeButton(); 
});
When("the user fill the form", () => {
    signUpFreeForm.fillingForm('Rafael Quispe','CorreoPrueba78946123@gmail.com','Prueba');
    signUpFreeForm.pressSignUpButtonForm();

})

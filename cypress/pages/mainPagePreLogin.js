//Clase para para manejar los elementos web de la pagina que concierne 
//a la pagina principal antes de realizar el login 
//se tienen las funcionas para interactuar con dichos elementos
class MainPagePreLogin{

    elements = {
        signUpFreeButton: ()=> cy.get('.HPHeaderSignup'),
    }
    visit() {
      cy.visit('/');
    }
    //Metodo para pSresionar el buton para realizar un Sign Up
    pressSignUpFreeButton(){
        this.elements.signUpFreeButton().click();
    }
  } 
export const mainPagePreLogin= new MainPagePreLogin();


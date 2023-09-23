class MainPagePreLogin{

    elements = {
        signUpFreeButton: ()=> cy.get('.HPHeaderSignup'),
    }
    visit() {
      cy.visit('/');
    }
    pressSignUpFreeButton(){
        this.elements.signUpFreeButton().click();
    }
  } 
export const mainPagePreLogin= new MainPagePreLogin();


//Clase para para manejar los elementos web de la pagina que concierne al Login
//se tienen las funcionas para interactuar con dichos elementos
class TodoLy {

    elements = {
        LogInButtonMainPage: ()=> cy.get('.HPHeaderLogin'),
        emailField: ()=>  cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail'),
        passwordField: ()=> cy.get('#ctl00_MainContent_LoginControl1_TextBoxPassword'),
        submitLoginButton : ()=> cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin')
    }
   
    visit() {
      cy.visit('/');
    }
   //Metodo para presionar el buton de login
    logInButton(){
      this.elements.LogInButtonMainPage().click();
    }
    //Metodo para ingresar las credenciales correspondientes
    logIn(correo, password) {
      this.elements.emailField().type(correo);
      this.elements.passwordField().type(password);
    //Presionar el boton de login
    }
    pressLogInButton(){
        this.elements.submitLoginButton().click();
    }
    verifyExistanceOfLoginButton(){
      this.elements.LogInButtonMainPage().should('exist');
  }
  }
  
export const todoLy= new TodoLy();


//Clase para para manejar los elementos web de la pagina que concierne al logout
//se tienen las funcionas para interactuar con dichos elementos
class LogOut{

    elements = {
        logOutButtonMainPage: ()=> cy.get('#ctl00_HeaderTopControl1_LinkButtonLogout'),
    }
    visit() {
      cy.visit('/');
    }
  //Presionar el boton de logout
    pressLogOutButton(){
        this.elements.logOutButtonMainPage().click();
    }
    verifyVisibiltyLogOutButton(){
      this.elements.logOutButtonMainPage().should('be.visible')
    }
  } 
export const logOut= new LogOut();


import {When,After} from "@badeball/cypress-cucumber-preprocessor";
import {mainPagePostLogin} from '@pages/mainPagePostLogin'

//Pasos para la crear, actualizar y borrar un item en la pagina.
When("the user create a new Item", () => {
  mainPagePostLogin.createNewItem('New Item');    
});

When("the user update the item", () => {
  mainPagePostLogin.updateItem('Item Updated');    
});

When("the user deletes the item", () => {
  mainPagePostLogin.deleteItem();    
});

After(() => {
  cy.reload();    
});

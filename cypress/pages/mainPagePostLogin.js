//Clase para para manejar los elementos web de la pagina que concierne 
//a la pagina principal despues de realizar el login correctamente
//se tienen las funcionas para interactuar con dichos elementos
class MainPagePostLogin{
a
    elements = {
        addButton: ()=> cy.get('#NewItemAddButton'),
        newItemInputField: ()=> cy.get('#NewItemContentInput'),
        existentItem: ()=> cy.contains('New Item'),
        editInputField: ()=> cy.get('#ItemEditTextbox'),
        deleteItem: ()=> cy.get('#ItemCheckBox'),
    }
    visit() {
      cy.visit('/');
    }
    //Metodo para crear un nuevo Item
    createNewItem(newItem){
        this.elements.newItemInputField().type(newItem);
        this.elements.addButton().click();
    }
    //Metodo para actualizar un item
    updateItem(newItemUpdated){
      this.elements.existentItem().click();
      this.elements.editInputField().clear();
      this.elements.editInputField().type(newItemUpdated);
  }
    //Metodo para eliminar un item
    deleteItem(){
    this.elements.deleteItem().click();
}
  } 
export const mainPagePostLogin= new MainPagePostLogin();


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
    createNewItem(newItem){
        this.elements.newItemInputField().type(newItem);
        this.elements.addButton().click();
    }
    updateItem(newItemUpdated){
      this.elements.existentItem().click();
      this.elements.editInputField().clear();
      this.elements.editInputField().type(newItemUpdated);
  }
  deleteItem(){
    this.elements.deleteItem().click();
}
  } 
export const mainPagePostLogin= new MainPagePostLogin();


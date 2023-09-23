class SignUpFreeForm{

    elements = {
        fullName: ()=> cy.get('#ctl00_MainContent_SignupControl1_TextBoxFullName'),
        emailField: ()=> cy.get('#ctl00_MainContent_SignupControl1_TextBoxEmail'),
        passwordField: ()=> cy.get('#ctl00_MainContent_SignupControl1_TextBoxPassword'),
        signUpButton: ()=> cy.get('#ctl00_MainContent_SignupControl1_ButtonSignup'),
        checkButton: ()=> cy.get('#ctl00_MainContent_SignupControl1_CheckBoxTerms'),
    }
    visit() {
      cy.visit('/');
    }
    
    fillingForm(fullName, email, password) {
        this.elements.fullName().type(fullName);
        this.elements.emailField().type(email);
        this.elements.passwordField().type(password);
        this.elements.checkButton().click();
      }
    pressSignUpButtonForm(){
          this.elements.signUpButton().click();
      }
  } 
export const signUpFreeForm= new SignUpFreeForm();


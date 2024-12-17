class createAccountPage{
    elements = {
        createAccountTitle: () => cy.title(),
        firstName: () => cy.get('#firstname'),
        lastName: () => cy.get('#lastname'),
        email: () => cy.get('#email_address'),
        password:() =>cy.get('#password'),
        confirmPassword:() =>cy.get('#password-confirmation'),
        createAccountBtn: () => cy.get('#form-validate > .actions-toolbar > div.primary > .action > span'),
        successMesage:() => cy.get('.message-success > div'),
        errorMesage:() => cy.get('.message-error > div'),
        firstNameError:() => cy.get('#firstname-error'),
        lastNameError:() => cy.get('#lastname-error'),
        emailError:() => cy.get('#email_address-error'),
        passwordError:() => cy.get('#password-error'),
        confirmationPasswordError:() => cy.get('#password-confirmation-error'),

    }
    titleCreateAccount() {
        this.elements.createAccountTitle().should('eq','Create New Customer Account');
    }
    typeFirstName(name){
        this.elements.firstName().type(name);    
    }
    typeLastName(lname){
        this.elements.lastName().type(lname);
    }
    typeEmail(username){
        this.elements.email().type(username);
    }
    typePassword(password){
        this.elements.password().type(password);
    }
    typeConfirmPassword(cpassword){
        this.elements.confirmPassword().type(cpassword);
    }
    clickCreateAccountBtn(){
        this.elements.createAccountBtn().click()
    }
    success(){
        this.elements.successMesage().should('have.text', 'Thank you for registering with Main Website Store.')
    }
    errorM(){
        this.elements.errorMesage().should('have.text','There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
    }
    errorN(){
        this.elements.firstNameError().should('have.text','This is a required field.')
    }
    errorLN(){
        this.elements.lastNameError().should('have.text','This is a required field.')
    }
    errorEmail(){
        this.elements.emailError().should('have.text','This is a required field.')
    }
    errorPassword(){
        this.elements.passwordError().should('have.text','This is a required field.')
    }
    errorConfirmationPassword(){
        this.elements.confirmationPasswordError().should('have.text','This is a required field.')
    }
    
}
module.exports = new createAccountPage();
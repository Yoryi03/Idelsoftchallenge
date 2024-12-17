class loginPage{
    elements = {
        loginTitle:() => cy.title(),
        loginEmail: () => cy.get('#email'),
        loginPassword: () => cy.get('#pass'),
        siginBtn:() => cy.get('#send2'),
        passwordError:() => cy.get('#pass-error'),
        emailError:() => cy.get('#email-error')

    }
    titleLogin(){
        this.elements.loginTitle().should('eq','Customer Login');
    }
    typeLogin(username) {
        this.elements.loginEmail().type(username);
    }
    typePassword(password){
        this.elements.loginPassword().type(password);
    }
    clickSiginBtn(){
        this.elements.siginBtn().click();
    }
    errorPassword(){
        this.elements.passwordError().should('have.text','This is a required field.')
    }
    errorEmail(){
        this.elements.emailError().should('have.text','This is a required field.')
    }
}
module.exports = new loginPage();
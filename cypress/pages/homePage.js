
class homePage{
    
    elements = {
        homeTitle:() => cy.title(),
        createAccountNav: () => cy.get('.panel > .header > :nth-child(3) > a'),
        loginAccountNav: () => cy.get('.panel > .header > .authorization-link > a'),
        loginUserName:() => cy.get(':nth-child(2) > .greet > .logged-in'),
        search:() => cy.get('#search'),
        

    }
    titleHome(){
        this.elements.homeTitle().should('eq','Home Page');
    }
    clickCreateAccount() {
        this.elements.createAccountNav().click();
    }
    clickLoginNav(){
        this.elements.loginAccountNav().click();
    }
    username(){
        this.elements.loginUserName().should('have.text','Welcome, Rafael De la Rosas!');
    }
    searchBard(product){
        this.elements.search().type(product).type("{enter}")
    }
    
    
}
module.exports = new homePage();
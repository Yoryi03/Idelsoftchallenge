class catalogSearchPage{
    elements ={
        pageAssertion: () => cy.get('.column > .message > div')
    }
    assertionPage(){
        this.elements.pageAssertion().should("contain","Minimum Search query length is 3")
    }
}
module.exports = new catalogSearchPage();
import homePage from "../pages/homePage";
import catalogSearchPage from "../pages/catalogSearchPage";
const tests = require("../fixtures/testdata.json")
describe('Search and Filtering', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
  });
  tests.forEach((test) => {
    it('Search - Verify that you can search by product name', () => {
      homePage.titleHome();
      homePage.searchBard(test.radianTeeProduct,);
      cy.get(':nth-child(1) > .product-item-info > .details').should("contain",(test.radianTeeProduct)).and("contain","$22.00");
   
  })
  it('Search - Verify that you can search by product type', () => {
    homePage.titleHome();
    homePage.searchBard(test.JacketsProduct,);
    cy.get(':nth-child(1) > .product-item-info > .details').should("contain",(test.JacketsProduct)).and("contain","$57.00");

  })
  it('Search - validate that the minimum number of characters to perform a search is 3', () => {
    homePage.titleHome();
    homePage.searchBard(test.minimunCharacter,);
    cy.get(':nth-child(1) > .product-item-info > .details').should("contain",(test.JacketsProduct)).and("contain","$57.00");

  })
  it('Search - validate that a search with less than three characters does not return any results. ', () => {
    homePage.titleHome();
    homePage.searchBard(test.lessMinimunCharacter,);
    catalogSearchPage.assertionPage();
  })
})
})
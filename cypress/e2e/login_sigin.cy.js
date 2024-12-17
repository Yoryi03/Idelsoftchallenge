import homePage from "../pages/homePage";
import createAccountPage from "../pages/createAccountPage";
import loginPage from "../pages/loginPage";
import { faker, Faker } from "@faker-js/faker";
const tests = require("../fixtures/testdata.json");
describe('Testing Sigin and Login', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
  });

  tests.forEach((test) => {
  it('Create account successfuly', () => {
    homePage.titleHome();
    homePage.clickCreateAccount();
    createAccountPage.titleCreateAccount();
    createAccountPage.typeFirstName(test.fname);
    createAccountPage.typeLastName(test.lname);
    createAccountPage.typeEmail(faker.internet.email());
    createAccountPage.typePassword(test.password);
    createAccountPage.typeConfirmPassword(test.password);
    createAccountPage.clickCreateAccountBtn();
    createAccountPage.success();
  })
  it('validate that you cannot create an account with an email address that is already in use',() =>{
    homePage.titleHome();
    homePage.clickCreateAccount();
    createAccountPage.titleCreateAccount();
    createAccountPage.typeFirstName(test.fname);
    createAccountPage.typeLastName(test.lname);
    createAccountPage.typeEmail(test.email);
    createAccountPage.typePassword(test.password);
    createAccountPage.typeConfirmPassword(test.password);
    createAccountPage.clickCreateAccountBtn();
    createAccountPage.errorM();
  })
  it('validate that you cannot left empty require field first name',() =>{
    homePage.titleHome();
    homePage.clickCreateAccount();
    createAccountPage.titleCreateAccount();
    createAccountPage.typeLastName(test.lname);
    createAccountPage.typeEmail(test.email);
    createAccountPage.typePassword(test.password);
    createAccountPage.typeConfirmPassword(test.password);
    createAccountPage.clickCreateAccountBtn();
    createAccountPage.errorN();
  })
  it('validate that you cannot left empty require field last name',() =>{
    homePage.titleHome();
    homePage.clickCreateAccount();
    createAccountPage.titleCreateAccount();
    createAccountPage.typeFirstName(test.fname);
    createAccountPage.typeEmail(test.email);
    createAccountPage.typePassword(test.password);
    createAccountPage.typeConfirmPassword(test.password);
    createAccountPage.clickCreateAccountBtn();
    createAccountPage.errorLN();
  })
  it('validate that you cannot left empty require field email',() =>{
    homePage.titleHome();
    homePage.clickCreateAccount();
    createAccountPage.titleCreateAccount();
    createAccountPage.typeFirstName(test.fname);
    createAccountPage.typeLastName(test.lname);
    createAccountPage.typePassword(test.password);
    createAccountPage.typeConfirmPassword(test.password);
    createAccountPage.clickCreateAccountBtn();
    createAccountPage.errorEmail();
  })
  it('validate that you cannot left empty require field password',() =>{
    homePage.titleHome();
    homePage.clickCreateAccount();
    createAccountPage.titleCreateAccount();
    createAccountPage.typeFirstName(test.fname);
    createAccountPage.typeLastName(test.lname);
    createAccountPage.typeEmail(test.email);
    createAccountPage.typeConfirmPassword(test.password);
    createAccountPage.clickCreateAccountBtn();
    createAccountPage.errorPassword();
  })
  it('validate that you cannot left empty require field confirmation password',() =>{
    homePage.titleHome();
    homePage.clickCreateAccount();
    createAccountPage.titleCreateAccount();
    createAccountPage.typeFirstName(test.fname);
    createAccountPage.typeLastName(test.lname);
    createAccountPage.typeEmail(test.email);
    createAccountPage.typePassword(test.password);
    createAccountPage.clickCreateAccountBtn();
    createAccountPage.errorConfirmationPassword();
  })
  it('Login with a existing accound successufuly', () => {   
    homePage.titleHome();
    homePage.clickLoginNav();
    loginPage.titleLogin();
    loginPage.typeLogin(test.email);
    loginPage.typePassword(test.password);
    loginPage.clickSiginBtn();
    homePage.titleHome();
    homePage.username(); 
  })
  it('Login - validate that you cannot left empty require field email', () => {   
    homePage.titleHome();
    homePage.clickLoginNav();
    loginPage.titleLogin();
    loginPage.typePassword(test.password);
    loginPage.clickSiginBtn();
    loginPage.errorEmail();
  })
  it('Login - validate that you cannot left empty require field password', () => {   
    homePage.titleHome();
    homePage.clickLoginNav();
    loginPage.titleLogin();
    loginPage.typeLogin(test.email);
    loginPage.clickSiginBtn();
    loginPage.errorPassword();
  })
  

    

})
})
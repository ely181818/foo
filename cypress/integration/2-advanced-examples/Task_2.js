import 'cypress-file-upload'
class BasePage{
 
  static getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  static createMail(){
    
   return 'abcd'+BasePage.getRandomArbitrary(100,300) +'@gmail.com';
  }

  

}
describe('file upload', () => {

  /*it('simple file upload', ()=> {
  
   cy.visit('http://automationpractice.com/index.php');
      cy.get('#contact-link > a').click();
      cy.get('#id_contact').select('Customer service');
      cy.get('#email').type('abcd@gmail.com');
      cy.get('#id_order').type('order men bag 98989');
      cy.get('#message').type('Testing the message box');
     
    const yourFixturePath = 'image1.jpeg';
    cy.get('#fileUpload').attachFile(yourFixturePath)
    cy.get('#submitMessage > span').click();
    
});*/


let mail;
before(function(){
  mail=BasePage.createMail();
  cy.log('create acount first time for all test')
    cy.visit('http://automationpractice.com/index.php');
    cy.get('.login').click();
    cy.get('#email_create').type(mail);
    cy.get('#SubmitCreate > span').click();
    cy.get('#id_gender2').click();
    cy.get('#customer_firstname').type('Bob');
    cy.get('#customer_lastname').type('delane');
    cy.get('#passwd').type('123456');
    cy.get('#days').select('12');
    cy.get('#months').select('12');
    cy.get('#years').select('1977');
    cy.get('#company').type('IBBMM');
    cy.get('#address1').type('Central Park West and Columbus');
    cy.get('#address2').type('	Amsterdam and West End');
    cy.get('#city').type('newYork');
    cy.get('#id_state').select('Arizona');
    cy.get('#postcode').type('00008');
    cy.get('#phone').type('050987654');
    cy.get('#phone_mobile').type('050987654');
    cy.get('#submitAccount > span').click();
    cy.get('.logout').click();

});




beforeEach(function(){
  cy.visit('http://automationpractice.com/index.php');
  cy.get('.login').click();
  cy.get('#email').type(mail);
  cy.get('#passwd').type('123456');
  cy.get('#SubmitLogin > span').click();


});

afterEach(function(){
    cy.get('[title="View my shopping cart"]').click();
     cy.get('.logout').click();
});


it('ADD TO CART - DRESSES', () => {
  cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click();
  cy.get('.first-in-line.first-item-of-tablet-line > .product-container > .right-block > h5 > .product-name').should('have.text','\n\t\t\t\t\t\t\tPrinted Dress\n\t\t\t\t\t\t')
  cy.get('.first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click();

})



it('ADD TO CART - Women', () => {
  cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click();
  cy.get(':nth-child(1) > .product-container > .right-block > h5 > .product-name').should('have.text','\n\t\t\t\t\t\t\tFaded Short Sleeve T-shirts\n\t\t\t\t\t\t')
  cy.get(':nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click();
 
})
 



it('ADD TO CART - T-shirts', () => {
  cy.get('.sf-menu > :nth-child(3) > a').click();
  cy.get('.right-block > h5 > .product-name').should('have.text','\n\t\t\t\t\t\t\tFaded Short Sleeve T-shirts\n\t\t\t\t\t\t')
  cy.get('.ajax_add_to_cart_button > span').click();
 
 
})





    
    

  })
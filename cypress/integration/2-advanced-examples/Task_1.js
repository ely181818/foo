import 'cypress-file-upload'

describe('file upload', () => {

  it('simple file upload', ()=> {
  
   cy.visit('http://automationpractice.com/index.php');
      cy.get('#contact-link > a').click();
      cy.get('#id_contact').select('Customer service');
      cy.get('#email').type('abcd@gmail.com');
      cy.get('#id_order').type('order men bag 98989');
      cy.get('#message').type('Testing the message box');
     
    const fileName = 'image1.jpeg';
    cy.get('#fileUpload').attachFile(fileName)
    cy.get('.filename').contains(fileName); 
    cy.get('#submitMessage > span').click();
    cy.get('.alert').should('have.text','Your message has been successfully sent to our team.')
    
});


    
    

  })
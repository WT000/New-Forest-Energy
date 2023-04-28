// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })



  
    before(() => {
      cy.log("Seeding the database before all tests");
      cy.request("http://localhost:3000/api/seeddb/");
      cy.wait(500)
    });
    
    beforeEach(() => {
      cy.log("Seeding the database before running tests");
      cy.request("http://localhost:3000/api/seeddb/");
    });


describe("Home Page Test", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("shows the add button", () => {
      cy.getByData("tilet").should("be.visible");
  
    //   cy.getByData("add-button").click();
  
    //   cy.url().should("eq", Cypress.config().baseUrl + "/recipes/create")
    });
  

  });
  
  export {}; 
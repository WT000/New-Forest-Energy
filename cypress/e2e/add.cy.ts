describe("Add home Test", () => {
    beforeEach(() => {
      cy.visit("homes/new");
    });
  
    it("Add a home", () => {
        cy.url().should("eq", Cypress.config().baseUrl + "/homes/new")
        cy.getByData("hometile4").eq(0).click()
        cy.getByData("hometile4").eq(0).type("NewTestHome")
        cy.getByData("hometile4").eq(1).click()
        cy.getByData("hometile4").eq(1).type("delegate1@delagates.com")
        cy.getByData("hometile4").eq(2).click()
        cy.getByData("hometile4").eq(2).type("6")
        cy.getByData("hometile4").eq(3).click()
        cy.getByData("hometile4").eq(3).type("0.65")
        cy.getByData("hometile4").eq(4).click()
        cy.getByData("hometile4").eq(4).type("0.70")
        cy.getByData("hometile4").eq(5).click()
        cy.getByData("hometile4").eq(5).type("delegate2@delagates.com, delegate3@delagates.com")
        cy.getByData("instructionsinput").eq(0).type("sdfsd")
        cy.getByData("testbutton").click()


    });

    it("validation for adding a home ", () => {




    });


    
  

  });
  
  export {}; 